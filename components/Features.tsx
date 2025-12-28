export default function Features() {
  const features = [
    {
      title: "Unlimited Entertainment",
      desc: "Movies, Web Series, Live TV aur premium shows bina kisi limit ke enjoy karo.",
      icon: "🎬"
    },
    {
      title: "Watch Anytime Anywhere",
      desc: "Mobile, Laptop, TV ya Tablet – har device par seamless streaming.",
      icon: "📱"
    },
    {
      title: "Ultra HD Quality",
      desc: "4K HDR + Dolby sound support with buffer free smooth experience.",
      icon: "🔥"
    },
    {
      title: "Download & Watch Offline",
      desc: "Apne favourite shows download karo aur kabhi bhi dekho.",
      icon: "⬇️"
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Why Choose <span className="text-red-600">Our Streaming</span> Platform?
          </h2>
          <p className="mt-3 text-gray-400 text-lg">
            Premium quality entertainment designed for you.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              key={i}
              className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-6 border border-gray-800 shadow-lg"
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
