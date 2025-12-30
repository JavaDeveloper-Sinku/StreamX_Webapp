"use client";

import { useState } from "react";

export default function LivePage() {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);

  const videos = [
    { id: "1", title: "React Tutorial" },
    { id: "2", title: "Next.js Masterclass" },
    { id: "3", title: "AI Automation Guide" },
  ];

  const togglePlatform = (platform: string) => {
    setPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleStream = () => {
    if (!selectedVideo || platforms.length === 0) {
      alert("Please select a video and at least one platform");
      return;
    }

    setIsStreaming(true);

    setTimeout(() => {
      alert("Streaming started successfully!");
    }, 1500);
  };

  return (
    <div className="bg-green/30 p-6 rounded-xl shadow space-y-6">
      <h1 className="text-2xl font-bold">Go Live</h1>

      {/* Select Video */}
      <div className="p-4 border rounded-lg">
        <h2 className="font-semibold mb-2">Select Video</h2>

        <select
          className="w-full border px-3 py-2 rounded-lg"
          value={selectedVideo}
          onChange={(e) => setSelectedVideo(e.target.value)}
        >
          <option value="">Select a video</option>
          {videos.map((v) => (
            <option key={v.id} value={v.id}>
              {v.title}
            </option>
          ))}
        </select>
      </div>

      {/* Select Platforms */}
      <div className="p-4 border rounded-lg">
        <h2 className="font-semibold mb-3">Select Platforms</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { name: "YouTube", value: "youtube", color: "text-red-600" },
            { name: "Facebook", value: "facebook", color: "text-blue-600" },
            { name: "Twitch", value: "twitch", color: "text-purple-600" },
          ].map((p) => (
            <label
              key={p.value}
              className="flex items-center gap-2 border p-3 rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={platforms.includes(p.value)}
                onChange={() => togglePlatform(p.value)}
              />
              <span className={`font-medium ${p.color}`}>{p.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Status & Button */}
      <div className="flex justify-between items-center border p-4 rounded-lg">
        <div>
          <p className="font-semibold">
            Status:{" "}
            <span className={isStreaming ? "text-green-600" : "text-gray-600"}>
              {isStreaming ? "Streaming Live..." : "Not Streaming"}
            </span>
          </p>
          {isStreaming && (
            <p className="text-sm text-gray-500">
              Your video is live on selected platforms 🎥
            </p>
          )}
        </div>

        <button
          onClick={handleStream}
          className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400"
          disabled={isStreaming}
        >
          {isStreaming ? "Streaming..." : "Stream Now"}
        </button>
      </div>
    </div>
  );
}
