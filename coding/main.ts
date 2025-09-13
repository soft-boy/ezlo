// coding/main.ts
import "@std/dotenv/load";
import { extname, join } from "@std/path";
import { contentType } from "@std/media-types";
import {
  AnthropicModelProvider,
  ErrorDetectionInterceptor,
  ESLintErrorDetector,
  TypeScriptErrorDetector,
  ZypherAgent,
} from "@corespeed/zypher";
import {
  CopyFileTool,
  defineEditFileTool,
  DeleteFileTool,
  GrepSearchTool,
  ListDirTool,
  ReadFileTool,
  RunTerminalCmdTool,
} from "@corespeed/zypher/tools";
import { eachValueFrom } from "rxjs-for-await"

// ---------- config ----------
const PORT = Number(Deno.env.get("PORT") ?? 8787);
const MODEL = "claude-sonnet-4-20250514"; // same as your CLI
const WORKSPACE = "./deckspeed-template"; // your workspace directory
const ALLOWED_ORIGIN = Deno.env.get("ALLOWED_ORIGIN") ?? "http://localhost:3000";

// ---------- Zypher setup ----------
function getRequiredEnv(name: string): string {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Environment variable ${name} is not set`);
  return value;
}
const prompt = await Deno.readTextFile("./prompt.md");
Deno.chdir(WORKSPACE); // Zypher expects to run inside the workspace
console.log(`🚀 cwd: ${Deno.cwd()}`);

const zypher = new ZypherAgent(
  new AnthropicModelProvider({ apiKey: getRequiredEnv("ANTHROPIC_API_KEY") }),
  { customInstructions: prompt },
);

const mcp = zypher.mcpServerManager;
const { EditFileTool } = defineEditFileTool();
mcp.registerTool(ReadFileTool);
mcp.registerTool(EditFileTool);
mcp.registerTool(CopyFileTool);
mcp.registerTool(DeleteFileTool);
mcp.registerTool(GrepSearchTool);
mcp.registerTool(ListDirTool);
mcp.registerTool(RunTerminalCmdTool);

const loopMgr = zypher.loopInterceptorManager;
const errInterceptor = new ErrorDetectionInterceptor();
errInterceptor.registerDetector(new TypeScriptErrorDetector());
errInterceptor.registerDetector(new ESLintErrorDetector());
loopMgr.register(errInterceptor);

await zypher.init();

// ---------- live reload: watch workspace and notify WS clients ----------
const clients = new Set<WebSocket>();
(async () => {
  const watcher = Deno.watchFs(".");
  for await (const evt of watcher) {
    if (["modify", "create", "remove"].includes(evt.kind)) {
      const payload = JSON.stringify({ type: "reload" });
      for (const ws of clients) {
        try { ws.send(payload); } catch { /* ignore */ }
      }
    }
  }
})();

// ---------- helpers ----------
function okJSON(data: unknown) {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "content-type": "application/json",
      "access-control-allow-origin": ALLOWED_ORIGIN,
    },
  });
}

function notFound() {
  return new Response("Not found", { status: 404 });
}

// serve static files from WORKSPACE at /preview
async function servePreview(_req: Request, url: URL) {
  // Map /preview/* to files in current workspace (.)
  const rel = url.pathname.replace(/^\/preview\/?/, "");
  const filePath = rel === "" ? "index.html" : rel;
  const absPath = join(Deno.cwd(), filePath);

  try {
    const file = await Deno.readFile(absPath);
    const ct = contentType(extname(filePath)) ?? "application/octet-stream";
    return new Response(file, {
      headers: {
        "content-type": ct,
        "cache-control": "no-store",
        "access-control-allow-origin": ALLOWED_ORIGIN,
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

// ---------- WebSocket chat at /ws ----------
async function handleWS(req: Request) {
  const { socket, response } = Deno.upgradeWebSocket(req, { idleTimeout: 60 * 60_000 });
  socket.onopen = () => {
    clients.add(socket);
    socket.send(JSON.stringify({ type: "system", message: "connected" }));
  };
  socket.onclose = () => clients.delete(socket);
  socket.onerror = () => clients.delete(socket);

  socket.onmessage = async (ev) => {
    // Expected payload: {type:"user_prompt", task: string}
    try {
      const msg = JSON.parse(String(ev.data));
      if (msg.type !== "user_prompt" || typeof msg.task !== "string") return;

      // Start a Zypher task and stream events back
      socket.send(JSON.stringify({ type: "status", message: "running" }));
      try {
        const events = await zypher.runTask(msg.task, MODEL);
       
        
        let isFirstTextChunk = true;

        for await (const event of eachValueFrom(events)) {
          console.log(`[agent messsage] user task: ${event.type}`);
          // Stream "text" chunks like a chat response
          if (event.type === "text") {
            if (isFirstTextChunk) {
              isFirstTextChunk = false;
              socket.send(JSON.stringify({ type: "stream_start" }));
            }
            socket.send(JSON.stringify({ type: "text", content: event.content }));
          } else if (event.type === "message") {
            socket.send(JSON.stringify({ type: "message", message: event.message }));
            isFirstTextChunk = true; // break lines between messages
          } else if (event.type === "tool_use") {
            socket.send(JSON.stringify({ type: "tool_use", toolName: event.toolName }));
          } else if (event.type === "tool_use_input") {
            socket.send(JSON.stringify({ type: "tool_use_input", input: event.partialInput }));
          } else if (event.type === "cancelled") {
            socket.send(JSON.stringify({ type: "cancelled", reason: event.reason }));
          }
        }
        socket.send(JSON.stringify({ type: "stream_end" }));
        socket.send(JSON.stringify({ type: "status", message: "done" }));
      } catch (e) {
        socket.send(JSON.stringify({ type: "error", error: `${e}` }));
      }
    } catch {
      socket.send(JSON.stringify({ type: "error", error: "Malformed JSON" }));
    }
  };

  return response;
}

// ---------- HTTP server ----------
Deno.serve({ port: PORT }, (req: Request) => {
  const url = new URL(req.url);

  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "access-control-allow-origin": ALLOWED_ORIGIN,
        "access-control-allow-headers": "content-type",
        "access-control-allow-methods": "GET,POST,OPTIONS"
      }
    });
  }

  if (url.pathname === "/health") {
    return new Response(JSON.stringify({ ok: true }), {
      headers: {
        "content-type": "application/json",
        "access-control-allow-origin": ALLOWED_ORIGIN
      }
    });
  }

  if (url.pathname.startsWith("/preview")) {
    return servePreview(req, url); // your existing function (already uses Deno.cwd())
  }

  if (url.pathname === "/ws" && req.headers.get("upgrade") === "websocket") {
    return handleWS(req); // your existing function that calls Deno.upgradeWebSocket
  }

  return new Response("Not found", { status: 404 });
});

console.log(`🧩 API on http://localhost:${PORT}`);
console.log(`🖼️ Preview on http://localhost:${PORT}/preview`);
console.log(`💬 WS at ws://localhost:${PORT}/ws`);
