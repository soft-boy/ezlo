import React, { useEffect, useMemo, useRef, useState } from "react";


function App() {
  const [wsReady, setWsReady] = useState(false);
  const [chat, setChat] = useState("");           // current streaming buffer
  const [log, setLog] = useState([]);           // past messages
  const [input, setInput] = useState("");
  const wsRef = useRef(null);
  const iframeRef = useRef(null);
  const [previewKey, setPreviewKey] = useState(0);        // bump to force iframe reload

  const wsUrl = useMemo(() => {
    const url = new URL("ws://localhost:8787/ws");
    return url.toString();
  }, []);

  useEffect(() => {
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => setWsReady(true);
    ws.onclose = () => setWsReady(false);

    ws.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data);
        if (msg.type === "text") {
          setChat((c) => c + msg.content);
        } else if (msg.type === "stream_start") {
          setChat("");
        } else if (msg.type === "stream_end") {
          setLog((L) => [...L, chat]); // commit the streamed chunk
          setChat("");
        } else if (msg.type === "message") {
          setLog((L) => [...L, `[${msg.message.role}] ${msg.message.content}`]);
        } else if (msg.type === "tool_use") {
          setLog((L) => [...L, `🔧 Using tool: ${msg.toolName}`]);
        } else if (msg.type === "tool_use_input") {
          setLog((L) => [...L, `   Input: ${msg.input}`]);
        } else if (msg.type === "status") {
          setLog((L) => [...L, `ℹ️ ${msg.message}`]);
        } else if (msg.type === "cancelled") {
          setLog((L) => [...L, `🛑 Cancelled: ${msg.reason}`]);
        } else if (msg.type === "error") {
          setLog((L) => [...L, `❌ ${msg.error}`]);
        } else if (msg.type === "reload") {
          // Workspace changed → refresh preview iframe
          setPreviewKey((k) => k + 1);
        }
      } catch (e) {
        setLog((L) => [...L, `❌ Bad msg: ${String(e)}`]);
      }
    };

    return () => ws.close();
  }, [wsUrl, chat]);

  const sendPrompt = () => {
    const text = input.trim();
    if (!text || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
    wsRef.current.send(JSON.stringify({ type: "user_prompt", task: text }));
    setLog((L) => [...L, `👤 ${text}`]);
    setInput("");
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: "100vh", gap: 8, padding: 8 }}>
      {/* LEFT: Chat */}
      <div style={{ display: "flex", flexDirection: "column", border: "1px solid #ddd", borderRadius: 8 }}>
        <div style={{ padding: 12, borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
          <div>💬 Coding Agent</div>
          <div style={{ fontSize: 12 }}>{wsReady ? "🟢 Connected" : "🔴 Disconnected"}</div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: 12, whiteSpace: "pre-wrap", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
          {log.map((line, i) => <div key={i} style={{ marginBottom: 8 }}>{line}</div>)}
          {chat && <div style={{ color: "#555" }}>{chat}</div>}
        </div>

        <div style={{ padding: 12, borderTop: "1px solid #eee", display: "flex", gap: 8 }}>
          <input
            placeholder='e.g. "Create a landing page with a hero and CTA"'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendPrompt()}
            style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
          />
          <button onClick={sendPrompt} disabled={!wsReady} style={{ padding: "8px 12px", borderRadius: 6 }}>
            Send
          </button>
        </div>
      </div>

      {/* RIGHT: Preview */}
      <div style={{ display: "flex", flexDirection: "column", border: "1px solid #ddd", borderRadius: 8 }}>
        <div style={{ padding: 12, borderBottom: "1px solid #eee", display: "flex", gap: 8, alignItems: "center" }}>
          <div>🖼️ Live Preview</div>
          <button onClick={() => setPreviewKey((k) => k + 1)} style={{ marginLeft: "auto", padding: "6px 10px", borderRadius: 6 }}>
            Reload
          </button>
        </div>
        <iframe
          key={previewKey}
          ref={iframeRef}
          src="http://localhost:8787/preview"
          title="preview"
          style={{ flex: 1, border: "none", background: "white" }}
        />
      </div>
    </div>
  );
}

export default App;
