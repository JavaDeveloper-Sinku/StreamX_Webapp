"use client";

import { useState } from "react";

export default function UploadVideo() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleUpload = async () => {
  if (!file) return;

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please login first!");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8080/api/videos/upload");

  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.upload.onprogress = (e) => {
    if (e.lengthComputable) {
      setProgress(Math.round((e.loaded / e.total) * 100));
    }
  };

  xhr.onload = () => {
    setMessage(xhr.status === 200 ? "Upload success ✅" : "Upload failed ❌");
    console.log("STATUS:", xhr.status);
    setProgress(0);
  };

  xhr.onerror = () => setMessage("Network error ❌");

  xhr.send(formData);
};

  return (
    <div className="w-full bg-black/40 p-8 border rounded-xl border-white/10">
      <div className="max-w-3xl mx-auto bg-zinc-900 border border-white/10 rounded-2xl p-8 mt-6 shadow-xl">

        <h1 className="text-3xl font-bold text-white">
          Upload Your Content 🎬
        </h1>

        <div className="mt-8 bg-zinc-800/40 border border-white/10 rounded-xl p-8 flex flex-col items-center">

          <label className="cursor-pointer">
            <span className="bg-red-600 px-6 py-3 rounded-lg text-white">
              Choose Video
            </span>
            <input
              type="file"
              hidden
              accept="video/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </label>

          {file && (
            <p className="mt-4 text-gray-300">
              Selected: <span className="text-red-400">{file.name}</span>
            </p>
          )}
        </div>

        {progress > 0 && (
          <div className="w-full bg-gray-700 rounded-full h-3 mt-6">
            <div
              className="bg-red-600 h-3 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={!file}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-700 text-white py-3 rounded-lg"
        >
          {progress > 0 ? `Uploading... ${progress}%` : "Upload Now"}
        </button>

        {message && <p className="mt-4 text-gray-300">{message}</p>}
      </div>
    </div>
  );
}
