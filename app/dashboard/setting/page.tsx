"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        {["profile", "password", "stream"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg capitalize border ${
              activeTab === tab
                ? "bg-red-500 text-white border-red-500"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Profile Settings */}
      {activeTab === "profile" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <button className="mt-4 px-5 py-2 bg-red-500 text-white rounded-lg">
            Save Profile
          </button>
        </div>
      )}

      {/* Password Settings */}
      {activeTab === "password" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="password"
              placeholder="Current Password"
              className="border p-3 rounded-lg w-full"
            />
            <input
              type="password"
              placeholder="New Password"
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <button className="mt-4 px-5 py-2 bg-red-500 text-white rounded-lg">
            Update Password
          </button>
        </div>
      )}

      {/* Stream Settings */}
      {activeTab === "stream" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Stream Settings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Stream Key"
              className="border p-3 rounded-lg w-full"
            />
            <select className="border p-3 rounded-lg w-full">
              <option>Select Quality</option>
              <option>720p</option>
              <option>1080p</option>
              <option>2K</option>
              <option>4K</option>
            </select>
          </div>

          <button className="mt-4 px-5 py-2 bg-red-500 text-white rounded-lg">
            Save Stream Settings
          </button>
        </div>
      )}
    </div>
  );
}
