"use client";

import StatsCard from "@/components/DashboardComponents/StatsCard";
import VideoTable from "@/components/DashboardComponents/VideoTable";


export default function DashboardPage() {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-6">
        <StatsCard title="Total Views" value="120K" />
        <StatsCard title="Videos" value="34" />
        <StatsCard title="Live" value="2" />
        <StatsCard title="Space" value="8.2K" />
      </div>

      <VideoTable />
    </>
  );
}
