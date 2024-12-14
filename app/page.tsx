import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-yellow-500">Summer Days ☀️</h1>
        <p className="text-2xl text-gray-600">Hang in there! Warm days are coming!</p>
        <div className="relative w-full h-64">
          <Image
            src="/sebastien-gabriel--IMlv9Jlb24-unsplash.jpg"
            alt="Summer beach"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-orange-100 p-6 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-3">🍦 Ice Cream Time!</h3>
          <p>No more explaining why you&apos;re having ice cream in winter!</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-3">🏊‍♂️ Pool Party</h3>
          <p>Trade your hot chocolate for pool parties and BBQs!</p>
        </div>
        <div className="bg-green-100 p-6 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-3">👕 Less Layers</h3>
          <p>Goodbye winter coats, hello t-shirts and flip-flops!</p>
        </div>
      </section>

      {/* Winter Survival Guide */}
      <section className="text-center space-y-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-500">Until Then...</h2>
        <p className="text-lg">
          Enjoy the cozy Christmas vibes! ⛄️ 
          <br />
          Make snow angels, drink hot cocoa, and remember:
          <br />
          <span className="text-2xl font-bold text-orange-500">
            Every cold day brings us closer to summer! 🌞
          </span>
        </p>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="text-sm italic">
          &ldquo;Winter is just summer hitting the snooze button&ldquo;
            - Someone who really misses the beach 🏖️
          </p>
        </div>
      </section>
    </div>
  );
}
