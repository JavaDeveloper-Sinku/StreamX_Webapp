export default function StatsSection() {
  const stats = [
    { number: "12M+", label: "Active Users", icon: "👥" },
    { number: "4.9 / 5", label: "Global Rating", icon: "⭐" },
    { number: "80K+", label: "Movies & Series", icon: "🎬" },
    { number: "140+", label: "Countries Streaming", icon: "🌍" },
  ];

  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="w-[400px] h-[400px] bg-red-600/40 blur-[150px] rounded-full absolute -top-10 -left-10"></div>
        <div className="w-[400px] h-[400px] bg-purple-600/40 blur-[150px] rounded-full absolute bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide">
            Loved by the <span className="text-red-500">Streaming World</span>
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Real stats that prove our users trust and love us ❤️
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_25px_rgba(255,0,0,0.25)] hover:shadow-[0_0_45px_rgba(255,0,0,0.5)] transition-all duration-300 text-center cursor-pointer"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-4xl font-extrabold text-red-400 drop-shadow">
                {item.number}
              </h3>
              <p className="text-gray-300 mt-2 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
