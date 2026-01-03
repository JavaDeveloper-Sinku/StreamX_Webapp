"use client";

import { Bell, Search, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pageMeta: Record<
  string,
  { title: string; subtitle: string }
> = {
  "/dashboard": {
    title: "Dashboard",
    subtitle: "Manage your content smartly",
  },
  "/dashboard/upload": {
    title: "Upload",
    subtitle: "Upload your videos and media",
  },
  "/dashboard/videos": {
    title: "Videos",
    subtitle: "Manage your uploaded videos",
  },
  "/dashboard/live": {
    title: "Go Live",
    subtitle: "Manage your live streaming sessions",
  },
   "/dashboard/analytic": {
    title: "Analytics",
    subtitle: "View your performance metrics",
  },
   "/dashboard/setting": {
    title: "Settings",
    subtitle: "Control application preferences",
  },
};

export default function Topbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const pathname = usePathname();

  const currentPage =
    pageMeta[pathname] ??
    pageMeta["/dashboard"];

  return (
    <header className=" w-full sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/10 border-b border-gray-200 dark:border-white/10 rounded-b-4xl ">
      <div className=" flex items-center justify-between px-6 py-4">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition">
            <Menu className="text-gray-800 dark:text-gray-200" size={22} />
          </button>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              {currentPage.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {currentPage.subtitle}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

         

          {/* Notification */}
          <button className="relative p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition">
            <Bell size={18} className="text-gray-700 dark:text-gray-200" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border border-white dark:border-black rounded-full" />
          </button>

          {/* Avatar + Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-500 to-purple-500 shadow-md border border-white dark:border-white/10" />
              <ChevronDown size={18} className="text-gray-700 dark:text-gray-200" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-black/80 border border-gray-200 dark:border-white/10 rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/dashboard/profile"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10"
                  onClick={() => setShowProfileMenu(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/dashboard/setting"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10"
                  onClick={() => setShowProfileMenu(false)}
                >
                  Settings
                </Link>
                <Link
                  href="/dashboard/plans"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white/10"
                  onClick={() => setShowProfileMenu(false)}
                >
                  Plans
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {showSearch && (
        <div className="px-4 pb-3 md:hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-xl border border-gray-200 dark:border-white/10">
            <Search size={18} className="text-gray-500 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200"
            />
          </div>
        </div>
      )}
    </header>
  );
}
