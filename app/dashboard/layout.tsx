"use client";

import Sidebar from "@/components/DashboardComponents/Sidebar";
import Topbar from "@/components/DashboardComponents/Topbar";




export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
