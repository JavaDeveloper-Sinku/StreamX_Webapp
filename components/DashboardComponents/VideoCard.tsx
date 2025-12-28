type Video = {
  title: string;
  views: number;
  status: "UPLOADING" | "PROCESSING" | "READY" | "FAILED";
  progress?: number;
};

export default function VideoCard({ video }: { video: Video }) {
  const statusColor = {
    UPLOADING: "text-blue-600",
    PROCESSING: "text-yellow-600",
    READY: "text-green-600",
    FAILED: "text-red-600",
  };

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      {/* Thumbnail */}
      <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center mb-4">
        <span className="text-gray-500">Thumbnail</span>
      </div>

      {/* Info */}
      <h3 className="font-semibold text-lg">{video.title}</h3>
      <p className="text-sm text-gray-500">{video.views} views</p>

      {/* Status */}
      <p className={`mt-2 font-medium ${statusColor[video.status]}`}>
        {video.status}
      </p>

      {/* Progress */}
      {video.status === "PROCESSING" && (
        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
          <div
            className="bg-yellow-500 h-2 rounded-full"
            style={{ width: `${video.progress || 0}%` }}
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-4 mt-4 text-sm">
        <button className="text-blue-600 hover:underline">View</button>
        <button className="text-red-600 hover:underline">Delete</button>
      </div>
    </div>
  );
}
