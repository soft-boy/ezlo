export default function Slide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-orange-50 px-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          ⭐ Customer Raves
        </h1>
        <p className="text-2xl text-gray-600">
          Here's what our customers are saying
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-lime-500">
          <div className="mb-4">
            <div className="flex text-yellow-400 text-2xl mb-3">
              ⭐⭐⭐⭐⭐
            </div>
            <blockquote className="text-lg text-gray-700 italic">
              "Exactly the boost I need for marathon coding sessions."
            </blockquote>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-600">— Alex R.</p>
            <p className="text-xs text-gray-500">Verified Buyer</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
          <div className="mb-4">
            <div className="flex text-yellow-400 text-2xl mb-3">
              ⭐⭐⭐⭐⭐
            </div>
            <blockquote className="text-lg text-gray-700 italic">
              "Tastes like a fresh squeeze of lime with bubbles—without the sugar crash of typical energy drinks."
            </blockquote>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-600">— Jamie L.</p>
            <p className="text-xs text-gray-500">Fitness Enthusiast</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-cyan-500">
          <div className="mb-4">
            <div className="flex text-yellow-400 text-2xl mb-3">
              ⭐⭐⭐⭐⭐
            </div>
            <blockquote className="text-lg text-gray-700 italic">
              "Finally, an energy drink that doesn't feel heavy. I keep a case at work and at home."
            </blockquote>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-600">— Priya M.</p>
            <p className="text-xs text-gray-500">Busy Mom & Entrepreneur</p>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-lime-500 to-green-500 text-white px-6 py-3 rounded-full">
          <span className="text-lg font-semibold">Join thousands of satisfied customers!</span>
          <span className="text-xl">🎉</span>
        </div>
      </div>
    </div>
  );
}