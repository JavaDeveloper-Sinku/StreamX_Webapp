"use client";

import { useState } from "react";

export default function LivePage() {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);

  return (
    <div className="w-full flex gap-4 p-4 bg-black/40 border rounded-xl border-white/10">

      {/* LEFT MAIN BOX */}
      <div className="border rounded-2xl p-8 flex flex-col w-full space-y-6">
        <h2 className="text-5xl font-bold text-white">Go Live</h2>

        <div className="space-y-6">

          {/* TITLE INPUT */}
          <div className="relative">
            <span className="absolute left-4 top-2 text-sm text-gray-400">
              Title
            </span>
            <input
              type="text"
              className="w-full border rounded-md 
                         px-4 pt-8 pb-3 text-lg
                         bg-transparent text-white
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* DESCRIPTION INPUT */}
          <div className="relative">
            <span className="absolute left-4 top-2 text-sm text-gray-400">
              Description
            </span>
            <textarea
              className="w-full h-60 border rounded-md 
                         px-4 pt-8 pb-3 text-lg
                         bg-transparent text-white resize-none
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>
      </div>

      





      {/* RIGHT SETTINGS BOX */}
      <div className="border rounded-2xl p-8 flex flex-col w-96">

        {/* TOP CONTENT */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Stream Settings</h2>
          <div className="border rounded-xl overflow-hidden bg-black/30">
            <video
            controls
            className="w-full h-64 object-contain"
            />
          </div>

          <div className="p-2">
            <h3>Video Duration : xx / xx / xx</h3>
          </div>
          
        </div>
        



        {/* SPACE FILLER */}
        <div className="flex-1" />


        {/* BOTTOM BUTTON */}
        <button
          disabled={isStreaming}
          className="w-full py-3 mt-45 rounded-xl bg-red-600 text-white text-lg font-semibold
                     hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isStreaming ? "Streaming..." : "Go Live"}
        </button>
      </div>

    </div>
  );
}
