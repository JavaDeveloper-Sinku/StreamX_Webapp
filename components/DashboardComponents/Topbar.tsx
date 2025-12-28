// components/Topbar.tsx
export default function Topbar() {
  return (
    <header className="flex justify-between items-center bg-white px-6 py-4 shadow">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Hello, Creator 👋</span>
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
}
