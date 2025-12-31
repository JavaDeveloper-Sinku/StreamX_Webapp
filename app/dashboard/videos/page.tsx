"use client";

const videos = [
  {
    id: 1,
    title: "React Basics",
    duration: "12:30",
    uploadedAt: "2025-12-28 14:30",
    status: "READY",
  },
  {
    id: 2,
    title: "Next.js Upload Flow",
    duration: "08:45",
    uploadedAt: "2025-12-27 18:00",
    status: "PROCESSING",
  },
  {
    id: 3,
    title: "Live Stream Setup",
    duration: "15:20",
    uploadedAt: "2025-12-26 20:15",
    status: "UPLOADING",
  },
    {
    id: 3,
    title: "Live Stream Setup",
    duration: "15:20",
    uploadedAt: "2025-12-26 20:15",
    status: "UPLOADING",
  },
    {
    id: 3,
    title: "Live Stream Setup",
    duration: "15:20",
    uploadedAt: "2025-12-26 20:15",
    status: "UPLOADING",
  },
    {
    id: 3,
    title: "Live Stream Setup",
    duration: "15:20",
    uploadedAt: "2025-12-26 20:15",
    status: "UPLOADING",
  },
    {
    id: 3,
    title: "Live Stream Setup",
    duration: "15:20",
    uploadedAt: "2025-12-26 20:15",
    status: "UPLOADING",
  },
    {
    id: 3,
    title: "Live Stream Setup",
    duration: "15:20",
    uploadedAt: "2025-12-26 20:15",
    status: "UPLOADING",
  },

];

export default function VideosPage() {
  return (
    <div className="w-full bg-black/40 border rounded-xl border-white/10 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Your Videos </h1>
            <p className="text-gray-400 text-sm mt-1">
              Manage uploaded content, check processing status and actions
            </p>
          </div>

          <a
            href="/dashboard/upload"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow"
          >
            Upload New Video
          </a>
        </div>

        {/* Video List Table */}
        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 px-4">Uploaded At</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {videos.map((video) => (
                <tr key={video.id} className="text-white border-b border-gray-700 hover:bg-gray-800 transition">
                  <td className="py-3 px-4">{video.title}</td>
                  <td className="py-3 px-4">{video.duration}</td>
                  <td className="py-3 px-4">{video.uploadedAt}</td>
                  <td className="py-3 px-4">{video.status}</td>
                  <td className="py-3 px-4 text-right flex gap-2 justify-end">
                    <a
                      href={`/dashboard/videos/edit/${video.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </a>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                      onClick={() => alert(`Delete video: ${video.title}`)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {videos.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center text-gray-400 py-10">
                    No videos uploaded yet. <br />
                    <a href="/dashboard/upload" className="text-red-500 underline">
                      Upload your first video
                    </a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
