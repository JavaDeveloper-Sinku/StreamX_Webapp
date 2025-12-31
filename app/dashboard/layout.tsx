"use client";

import Sidebar from "@/components/DashboardComponents/Sidebar";
import Topbar from "@/components/DashboardComponents/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black/80 min-h-screen text-white">

      {/* --- Fixed Sidebar --- */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-zinc-900 border-r border-white/20 rounded-r-4xl">
        <Sidebar />
      </aside>

      {/* --- Main Section --- */}
      <div className="ml-64 min-h-screen">

        {/* Sticky Topbar */}
        <div className="sticky top-0 z-40">
          <Topbar />
        </div>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>

      </div>
    </div>
  );
}
