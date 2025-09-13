export default function Slide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 px-12">
      <div className="max-w-5xl text-center text-white">
        <h1 className="text-6xl font-bold mb-6 text-lime-300">
          💚 Our Story: Born from Late-Night Sparks
        </h1>
        
        <div className="space-y-6 text-xl leading-relaxed">
          <p className="text-2xl font-medium text-lime-100">
            It all started with a group of entrepreneurs working deep into the night. Coffee was too heavy, energy drinks too sugary.
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-2xl font-semibold text-yellow-300 mb-4">
              They dreamed of something <strong className="text-lime-300">clean, light, and exhilarating</strong>—a drink that could <strong className="text-cyan-300">match their creative energy without the crash</strong>.
            </p>
          </div>
          
          <p className="text-xl text-purple-100">
            After months of experimenting with plant-based caffeine and perfectly balanced bubbles, <strong className="text-lime-400">Kirkland Signature Lime Sparkling Energy Water</strong> was born.
          </p>
          
          <div className="bg-gradient-to-r from-lime-500 to-green-500 rounded-2xl p-6 text-gray-900">
            <p className="text-2xl font-bold">
              It's more than a drink; it's a <strong>spark of innovation in every can</strong>—made for builders, dreamers, and anyone chasing big ideas.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-8 flex justify-center space-x-4 text-4xl">
          <span className="animate-pulse">⚡</span>
          <span className="animate-pulse delay-300">💡</span>
          <span className="animate-pulse delay-700">🚀</span>
        </div>
      </div>
    </div>
  );
}