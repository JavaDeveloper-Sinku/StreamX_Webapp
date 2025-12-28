"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", views: 400 },
  { name: "Tue", views: 800 },
  { name: "Wed", views: 1500 },
  { name: "Thu", views: 1200 },
  { name: "Fri", views: 2000 },
  { name: "Sat", views: 2500 },
  { name: "Sun", views: 1800 },
];

export default function AnalyticsPage() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">Weekly Analytics</h1>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="views"
              stroke="#dc2626"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
