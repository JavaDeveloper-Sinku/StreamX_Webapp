import VideoStatusBadge from "./VideoStatusBadge";

const videos = [
  { title: "React Tutorial", views: "12K", status: "READY" },
  { title: "Next.js Upload", views: "0", status: "PROCESSING" },
  { title: "Live Stream Intro", views: "0", status: "UPLOADING" },
];

export default function VideoTable() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4">Your Videos</h3>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500">
            <th>Title</th>
            <th>Views</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {videos.map((v, i) => (
            <tr key={i} className="border-t">
              <td className="py-3">{v.title}</td>
              <td>{v.views}</td>
              <td>
                <VideoStatusBadge status={v.status as any} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
