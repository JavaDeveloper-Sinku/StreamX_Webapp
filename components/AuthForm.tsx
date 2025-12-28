"use client";
import { useState } from "react";
import Link from "next/link";

export default function AuthForm({ type }: { type: "login" | "signup" }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted", form);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      
      {/* StreamX Logo */}
      <Link href="/" className="mb-8 text-4xl font-extrabold text-red-600 hover:text-red-500 transition">
        StreamX
      </Link>

      {/* Auth Form */}
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          {type === "login" ? "Welcome Back 👋" : "Create an Account 🚀"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
          />

          {type === "signup" && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
            />
          )}

          <button className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded-lg text-white font-semibold">
            {type === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-4">
          {type === "login" ? (
            <>
              Don’t have an account?{" "}
              <Link href="/auth/signup" className="text-red-400 hover:underline">
                Signup
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/auth/login" className="text-red-400 hover:underline">
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
