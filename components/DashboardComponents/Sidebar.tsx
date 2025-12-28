"use client";
// components/Sidebar.tsx

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `block px-3 py-2 rounded ${
      pathname === path
        ? "bg-red-600 text-white"
        : "text-gray-400 hover:text-white hover:bg-gray-800"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-8">StreamX</h1>

      <nav className="space-y-2">
        <Link href="/dashboard" className={linkClass("/dashboard")}>
          Dashboard
        </Link>

        <Link href="/dashboard/upload" className={linkClass("/dashboard/upload")}>
          Upload
        </Link>

        <Link href="/dashboard/videos" className={linkClass("/dashboard/videos")}>
          Videos
        </Link>

        <Link href="/dashboard/live" className={linkClass("/dashboard/live")}>
          Live Streams
        </Link>

        <Link href="/dashboard/analytics" className={linkClass("/dashboard/analytics")}>
          Analytics
        </Link>

        <Link href="/dashboard/settings" className={linkClass("/dashboard/settings")}>
          Settings
        </Link>
      </nav>
    </aside>
  );
}
