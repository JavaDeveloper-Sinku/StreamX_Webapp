"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const weeklyData = [
  { name: "Mon", views: 400 },
  { name: "Tue", views: 800 },
  { name: "Wed", views: 1500 },
  { name: "Thu", views: 1200 },
  { name: "Fri", views: 2000 },
  { name: "Sat", views: 2500 },
  { name: "Sun", views: 1800 },
];

const monthlyData = [
  { name: "Week 1", views: 4500 },
  { name: "Week 2", views: 8200 },
  { name: "Week 3", views: 9600 },
  { name: "Week 4", views: 11000 },
];

const history = [
  { date: "27 Dec 2025", views: 2500 },
  { date: "26 Dec 2025", views: 2100 },
  { date: "25 Dec 2025", views: 3100 },
  { date: "24 Dec 2025", views: 1800 },
];

export default function AnalyticsPage() {
  const [range, setRange] = useState("weekly");

  const chartData = range === "weekly" ? weeklyData : monthlyData;

  return (
    <div className="space-y-10">
      {/* ===== Header + Filters ===== */}
      <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Analytics Dashboard 📊
            </h1>
            <p className="text-gray-400 mt-1">
              Track your performance with insights and trends
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4">
            {/* Range Filter */}
            <select
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="bg-zinc-800 border border-white/10 text-white px-4 py-2 rounded-lg outline-none"
            >
              <option value="weekly">This Week</option>
              <option value="monthly">Last 30 Days</option>
            </select>

            {/* Future: Category Filter */}
            <select className="bg-zinc-800 border border-white/10 text-white px-4 py-2 rounded-lg outline-none">
              <option>Views</option>
              <option>Watch Time</option>
              <option>Subscribers</option>
            </select>
          </div>
        </div>

        {/* ===== Chart Section ===== */}
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip
                contentStyle={{
                  background: "#111",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ stroke: "#fff", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===== History Section ===== */}
      <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-4">
          Analytics History 🕒
        </h2>

        <table className="w-full text-gray-300">
          <thead>
            <tr className="text-left border-b border-white/10">
              <th className="py-3">Date</th>
              <th className="py-3">Views</th>
            </tr>
          </thead>

          <tbody>
            {history.map((h, i) => (
              <tr
                key={i}
                className="border-b border-white/5 hover:bg-zinc-800/40 transition"
              >
                <td className="py-3">{h.date}</td>
                <td className="py-3 text-red-400 font-semibold">{h.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
