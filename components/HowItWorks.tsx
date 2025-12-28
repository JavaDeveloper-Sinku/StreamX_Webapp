export default function HowItWorks() {
  const steps = [
    {
      step: "Step 01",
      title: "Create Your Account",
      desc: "Simple signup karo using email or phone, bas 1 minute mein start.",
      icon: "👤"
    },
    {
      step: "Step 02",
      title: "Choose Your Plan",
      desc: "Monthly ya yearly plan select karo – cancel anytime, no risk.",
      icon: "💳"
    },
    {
      step: "Step 03",
      title: "Start Streaming",
      desc: "Movies, Series & Shows HD quality mein kisi bhi device par dekho.",
      icon: "🎬"
    },
    {
      step: "Step 04",
      title: "Download & Enjoy",
      desc: "Favourite content download karo aur offline kabhi bhi enjoy karo.",
      icon: "⬇️"
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            How It <span className="text-red-600">Works?</span>
          </h2>
          <p className="mt-3 text-gray-400 text-lg">
            4 simple steps mein unlimited entertainment 🎥
          </p>
        </div>

        {/* Flow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-gray-700 hover:border-red-600 rounded-2xl p-8 text-center transition shadow-lg"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <p className="text-red-500 font-semibold">{item.step}</p>
              <h3 className="text-xl font-bold mt-1">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-3">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Line Flow Effect */}
        <div className="hidden md:block mt-10">
          <div className="h-1 w-full bg-red-600/30 rounded-full relative">
            <span className="absolute left-1/4 top-0 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full"></span>
            <span className="absolute left-1/2 top-0 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full"></span>
            <span className="absolute left-3/4 top-0 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
