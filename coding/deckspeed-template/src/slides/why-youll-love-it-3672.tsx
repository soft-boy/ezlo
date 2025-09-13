export default function Slide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-12">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          ✨ Why You'll Love It
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-12 max-w-6xl">
        {/* Benefit 1 */}
        <div className="text-center bg-gradient-to-br from-green-50 to-lime-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-6xl mb-6">1️⃣</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Pure, Clean Energy
          </h3>
          <div className="text-lg text-gray-700 space-y-3">
            <p><strong>Plant-based caffeine + B-vitamins</strong> deliver a smooth, natural boost—no jitters, no crash.</p>
            <p>Keeps you sharp and energized from sunrise to late-night grind.</p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-6xl mb-6">2️⃣</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Zero Sugar. Zero Guilt.
          </h3>
          <div className="text-lg text-gray-700 space-y-3">
            <p><strong>0 calories, 0 sugar, 0 sweeteners</strong>—just sparkling, lime-kissed refreshment.</p>
            <p>Nothing artificial, only naturally flavored effervescence.</p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-6xl mb-6">3️⃣</div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Anywhere, Anytime Power
          </h3>
          <div className="text-lg text-gray-700 space-y-3">
            <p><strong>Grab-and-go 12 fl oz can</strong> fits effortlessly in your gym bag, car cup holder, or desk drawer.</p>
            <p>Hydrate and energize wherever your day (or night) takes you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}