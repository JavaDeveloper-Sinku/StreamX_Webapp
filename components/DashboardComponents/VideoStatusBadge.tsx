type Props = {
  status: "UPLOADING" | "PROCESSING" | "READY" | "FAILED";
};

export default function VideoStatusBadge({ status }: Props) {
  const styles: Record<string, string> = {
    UPLOADING: "bg-blue-100 text-blue-600",
    PROCESSING: "bg-yellow-100 text-yellow-600 animate-pulse",
    READY: "bg-green-100 text-green-600",
    FAILED: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`text-sm px-3 py-1 rounded-full font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
