"use client";

import { useState, useEffect } from "react";

export default function UploadVideo() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  // Fetch current logged-in user from localStorage
  useEffect(() => {
    const currentUserId = localStorage.getItem("currentUserId"); // store at login
    setUserId(currentUserId);
  }, []);

  const handleUpload = async () => {
    if (!file) return;
    if (!userId) {
      alert("Please login first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", userId); // basic auth mapping

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/api/videos/upload");

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setProgress(percent);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        setMessage(xhr.responseText); // backend response: URL / message
      } else {
        setMessage("Upload failed ❌");
      }
      setProgress(0);
      setFile(null);
    };

    xhr.onerror = () => {
      setMessage("Network error ❌");
      setProgress(0);
    };

    xhr.send(formData);
  };

  return (
    <div className="w-full bg-black/40 p-8 border rounded-xl border-white/10">
      <div className="max-w-3xl mx-auto bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-2xl p-8 mt-6 shadow-xl">
        <h1 className="text-3xl font-bold text-white">
          Upload Your Content 🎬
        </h1>
        <p className="text-gray-400 mt-2">
          High-quality streaming upload • Fast & Secure
        </p>

        <div className="mt-8 bg-zinc-800/40 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center backdrop-blur-sm">
          <div className="w-16 h-16 bg-red-600/20 text-red-500 flex items-center justify-center rounded-full text-3xl">
            ⬆
          </div>
          <h2 className="text-white text-xl font-semibold mt-4">
            Select your video to upload
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            MP4 • MKV • MOV — Max Size 4GB
          </p>

          <label className="mt-6">
            <span className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white cursor-pointer font-semibold transition">
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
            <p className="mt-4 text-gray-300 text-sm">
              Selected: <span className="text-red-400">{file.name}</span>
            </p>
          )}
        </div>

        {/* Progress */}
        {progress > 0 && (
          <div className="w-full bg-gray-700 rounded-full h-3 mt-6 overflow-hidden">
            <div
              className="bg-red-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={!file}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition"
        >
          {progress > 0 ? `Uploading... ${progress}%` : "Upload Now"}
        </button>

        {/* Message */}
        {message && <p className="mt-4 text-gray-300">{message}</p>}
      </div>
    </div>
  );
}
