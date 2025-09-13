export default function Slide() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-gray-200 px-12">
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Product Image Placeholder */}
        <div className="flex items-center justify-center">
          <div className="bg-gradient-to-br from-lime-400 to-green-600 rounded-3xl p-12 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
            <div className="text-center text-white">
              <div className="text-8xl mb-4">🥤</div>
              <h3 className="text-2xl font-bold">Kirkland Signature</h3>
              <p className="text-lg">Lime Sparkling Energy Water</p>
              <p className="text-sm mt-2 opacity-90">12 fl oz (355 mL)</p>
            </div>
          </div>
        </div>

        {/* Right side - Product Details */}
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-8">
            📋 Product Snapshot
          </h1>
          
          <div className="space-y-4">
            {/* Specifications Table */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="font-semibold text-gray-700 text-lg">Flavor:</div>
                <div className="text-lg text-gray-800">Bright, tangy Lime</div>
                
                <div className="font-semibold text-gray-700 text-lg">Size:</div>
                <div className="text-lg text-gray-800">12 fl oz (355 mL)</div>
                
                <div className="font-semibold text-gray-700 text-lg">Calories:</div>
                <div className="text-lg text-green-600 font-bold">0</div>
                
                <div className="font-semibold text-gray-700 text-lg">Sugar:</div>
                <div className="text-lg text-green-600 font-bold">0 g</div>
                
                <div className="font-semibold text-gray-700 text-lg">Energy:</div>
                <div className="text-lg text-gray-800">Plant-based caffeine & B-vitamins*</div>
              </div>
            </div>

            {/* Lifestyle badges */}
            <div className="bg-gradient-to-r from-green-500 to-lime-500 rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Perfect for Every Lifestyle:</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">🌱 Vegan</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">🌾 Gluten-free</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">🥩 Keto-friendly</span>
              </div>
            </div>

            {/* Energy note */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="text-sm text-gray-700">
                <strong>*</strong> Provides a gentle, sustained energy lift to keep you focused and motivated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}