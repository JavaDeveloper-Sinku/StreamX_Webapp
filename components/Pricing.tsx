export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹199 / month",
      desc: "Mobile screen + Good quality streaming",
      features: [
        "720p HD Streaming",
        "Watch on 1 Screen",
        "Ad Supported",
        "Download Limited"
      ],
      highlighted: false
    },
    {
      name: "Standard",
      price: "₹399 / month",
      desc: "Best for families & regular viewers",
      features: [
        "1080p Full HD Streaming",
        "Watch on 2 Screens",
        "Ad Free",
        "Unlimited Downloads"
      ],
      highlighted: true
    },
    {
      name: "Premium",
      price: "₹699 / month",
      desc: "Ultimate Experience for cinema lovers",
      features: [
        "4K Ultra HD + HDR",
        "Watch on 4 Screens",
        "Dolby Atmos Sound",
        "Unlimited Downloads"
      ],
      highlighted: false
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Choose Your <span className="text-red-600">Monthly Plan</span>
          </h2>
          <p className="mt-3 text-gray-400 text-lg">
            Simple pricing. Cancel anytime. No hidden charges.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl border ${
                plan.highlighted
                  ? "bg-zinc-900 border-red-600 shadow-[0_0_25px_rgba(255,0,0,0.3)] scale-105"
                  : "bg-zinc-900 border-gray-700 hover:border-red-600"
              } transition`}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-gray-400 text-sm">{plan.desc}</p>

              <h2 className="text-4xl font-extrabold mt-4 text-red-500">
                {plan.price}
              </h2>

              <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                {plan.features.map((f, index) => (
                  <li key={index} className="flex items-center gap-2">
                    ✅ {f}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 font-semibold">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
