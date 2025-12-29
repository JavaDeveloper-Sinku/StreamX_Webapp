"use client";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center px-4 py-10">
      {/* Main Container */}
      <div className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        
        {/* Header / Banner */}
        <div className="h-32 bg-gradient-to-r from-indigo-600 to-purple-600 relative">
          {/* Avatar */}
          <div className="absolute -bottom-10 left-8">
            <div className="w-24 h-24 rounded-full bg-gray-700 border-4 border-gray-800 flex items-center justify-center text-gray-400">
              IMG
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 px-8 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* ===== Left Info Panel ===== */}
          <div className="bg-gray-900 rounded-xl p-5">
            <h3 className="text-white font-semibold text-lg mb-4">
              Profile
            </h3>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400">Username</p>
                <p className="text-white font-medium">streamx_user</p>
              </div>

              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-white font-medium">user@email.com</p>
              </div>

              <div>
                <p className="text-gray-400">Member Since</p>
                <p className="text-white font-medium">Aug 2024</p>
              </div>
            </div>
          </div>

          {/* ===== Right Editable Panel ===== */}
          <div className="md:col-span-2 bg-gray-900 rounded-xl p-6">
            <h3 className="text-white font-semibold text-lg mb-6">
              Edit Profile
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">
                  Username
                </label>
                <input
                  type="text"
                  defaultValue="streamx_user"
                  className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg text-white outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="user@email.com"
                  className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg text-white outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg text-white outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium">
                  Save Changes
                </button>
                <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white">
                  Cancel
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
