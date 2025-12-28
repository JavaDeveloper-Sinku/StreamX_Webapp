"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("video", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/api/upload"); // backend later

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setProgress(percent);
      }
    };

    xhr.onload = () => {
      alert("Upload completed ✅");
      setProgress(0);
      setFile(null);
    };

    xhr.send(formData);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Upload Video</h1>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />

      {progress > 0 && (
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div
            className="bg-red-600 h-3 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <button
        onClick={handleUpload}
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Upload
      </button>
    </div>
  );
}
