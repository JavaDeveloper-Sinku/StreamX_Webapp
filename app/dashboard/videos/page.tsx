"use client";

import VideoCard from "@/components/DashboardComponents/VideoCard";

const videos = [
  {
    title: "React Basics",
    views: 12000,
    status: "READY",
  },
  {
    title: "Next.js Upload Flow",
    views: 0,
    status: "PROCESSING",
    progress: 65,
  },
  {
    title: "Live Stream Setup",
    views: 0,
    status: "UPLOADING",
  },
];

export default function VideosPage() {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Videos</h1>

        <a
          href="/dashboard/upload"
          className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700"
        >
          Upload Video
        </a>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <VideoCard key={i} video={video as any} />
        ))}
      </div>
    </div>
  );
}
