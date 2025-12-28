export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-2xl font-extrabold text-red-600">StreamX</h2>
            <p className="mt-3 text-sm">
              Unlimited movies, TV shows, web series and more.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Movies</li>
              <li className="hover:text-white cursor-pointer">Series</li>
              <li className="hover:text-white cursor-pointer">Live TV</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Subscription</li>
              <li className="hover:text-white cursor-pointer">Account</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <span className="hover:text-white cursor-pointer">👍</span>
              <span className="hover:text-white cursor-pointer">🐦</span>
              <span className="hover:text-white cursor-pointer">📸</span>
              <span className="hover:text-white cursor-pointer">▶️</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between text-sm">
          <p>© 2025 StreamX. All Rights Reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
