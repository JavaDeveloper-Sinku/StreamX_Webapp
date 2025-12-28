"use client";

interface Props {
  title: string;
  value: string | number;
}

export default function StatsCard({ title, value }: Props) {
  return (
    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow hover:scale-[1.02] transition">
      <p className="text-gray-400 text-sm">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>

      <div className="mt-4 h-2 bg-zinc-700 rounded-full overflow-hidden">
        <div className="h-full w-3/4 bg-red-600"></div>
      </div>
    </div>
  );
}
