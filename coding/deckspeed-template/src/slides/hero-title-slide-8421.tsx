export default function Slide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-lime-400 via-green-500 to-emerald-600 relative overflow-hidden">
      {/* Background elements for energy/sparkling effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-lime-200 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-white rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="text-center z-10 px-8">
        {/* Lightning bolt icon */}
        <div className="mb-6">
          <span className="text-8xl">⚡</span>
        </div>
        
        {/* Main title */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
          Kirkland Signature
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold text-lime-100 mb-6 drop-shadow-xl">
          Lime Sparkling Energy Water
        </h2>
        
        {/* Size info */}
        <p className="text-2xl text-lime-50 mb-8 font-medium">
          12 fl oz (355 mL)
        </p>
        
        {/* Tagline */}
        <div className="bg-white bg-opacity-90 rounded-2xl px-8 py-4 inline-block shadow-2xl">
          <p className="text-2xl md:text-3xl font-bold text-gray-800">
            Spark your day. Brighten your night.
          </p>
        </div>
      </div>
    </div>
  );
}