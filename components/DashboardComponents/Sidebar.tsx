"use client";
// components/Sidebar.tsx

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `block px-3 py-2 rounded-full transition ${
      pathname === path
        ? "bg-red-600 text-white"
        : "text-gray-400 hover:text-white hover:bg-gray-800"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-black/10 text-white p-6 flex flex-col justify-between  border-r border-black-10 rounded-r-4xl ">
      {/* --------- Top Section --------- */}
      <div>
        <h1 className="text-4xl font-bold mb-8 mt-4 px-8">StreamX</h1>

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
            Go Live
          </Link>

          <Link href="/dashboard/analytic" className={linkClass("/dashboard/analytic")}>
            Analytics
          </Link>

          <Link href="/dashboard/setting" className={linkClass("/dashboard/setting")}>
            Settings
          </Link>
        </nav>
      </div>

      {/* --------- Bottom Logout --------- */}
      <div className="border-t border-gray-800 pt-4">
        <Link
          href="/auth/login"  // <-- yaha ap apni logout / login route set karo
          className="block bg-red-600 hover:bg-red-700 text-center py-2 rounded-full font-semibold"
        >
          Logout
        </Link>
      </div>
    </aside>
  );
}
