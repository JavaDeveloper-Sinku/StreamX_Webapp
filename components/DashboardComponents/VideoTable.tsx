"use client";

const videos = [
  {
    title: "React Basics Tutorial",
    status: "READY",
    views: "12,300",
    date: "Dec 24, 2025",
  },
  {
    title: "Streaming Setup Guide",
    status: "PROCESSING",
    views: "-",
    date: "Dec 23, 2025",
  },
  {
    title: "Live Broadcast Demo",
    status: "UPLOADING",
    views: "-",
    date: "Dec 22, 2025",
  },
];

export default function VideoTable() {
  return (
    <div className="mt-10 bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-bold mb-4">Your Recent Videos</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-400 border-b border-white/10">
            <th className="py-3">Title</th>
            <th className="py-3">Status</th>
            <th className="py-3">Views</th>
            <th className="py-3">Uploaded</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {videos.map((video, i) => (
            <tr
              key={i}
              className="border-b border-white/10 hover:bg-zinc-800/40 transition"
            >
              <td className="py-4">{video.title}</td>

              <td>
                {video.status === "READY" && (
                  <span className="px-3 py-1 text-sm bg-green-600/20 text-green-400 rounded-full">
                    READY
                  </span>
                )}
                {video.status === "PROCESSING" && (
                  <span className="px-3 py-1 text-sm bg-yellow-600/20 text-yellow-400 rounded-full">
                    PROCESSING
                  </span>
                )}
                {video.status === "UPLOADING" && (
                  <span className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full">
                    UPLOADING
                  </span>
                )}
              </td>

              <td>{video.views}</td>
              <td>{video.date}</td>

              <td>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
