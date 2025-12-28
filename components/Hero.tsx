export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1601933470928-cdf9a8b3c2a6"
          alt="Streaming Banner"
          className="w-full h-full object-cover scale-105"
        />

        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black"></div>

        {/* Neon Atmosphere Glow */}
        <div className="absolute -top-10 -left-10 w-[380px] h-[380px] bg-red-600/40 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-purple-600/40 blur-[160px] rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6">

        {/* Streaming Highlight Badge */}
        <div className="mb-5">
          <span className="px-5 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-xl text-sm text-gray-300 shadow-[0_0_25px_rgba(255,0,0,.5)]">
            🔥 Unlimited Streaming • Premium Quality • No Ads
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
          Stream <span className="text-red-500">Movies, Series,</span>
          <br /> & Exclusive Originals Anytime
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl">
          Join millions of viewers enjoying Full HD & 4K streaming. Watch anywhere — TV, Mobile, Tablet & PC.
          Cancel anytime. Pure entertainment only 🎥
        </p>

        {/* Buttons */}
        <div className="mt-7 flex gap-4 flex-wrap">
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold shadow-[0_0_35px_rgba(255,0,0,0.5)] transition">
            ▶ Start Streaming
          </button>

          <button className="px-8 py-3 bg-white/15 hover:bg-white/25 border border-white/30 rounded-xl font-semibold backdrop-blur-xl">
            💎 View Subscription Plans
          </button>
        </div>

        {/* Small Note */}
        <p className="mt-6 text-sm text-gray-400">
          Already a member?
          <span className="text-red-400 cursor-pointer hover:underline"> Login Now</span>
        </p>
      </div>
    </section>
  );
}
