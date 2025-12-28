// app/auth/components/AuthForm.tsx
"use client";
import { useState } from "react";

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
    <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
      <h2 className="text-3xl font-bold text-white mb-6">
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

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-lg text-white font-semibold">
          {type === "login" ? "Login" : "Create Account"}
        </button>
      </form>

      <p className="text-gray-400 text-sm text-center mt-4">
        {type === "login" ? (
          <>
            Don’t have an account?{" "}
            <a href="/auth/signup" className="text-indigo-400">
              Signup
            </a>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <a href="/auth/login" className="text-indigo-400">
              Login
            </a>
          </>
        )}
      </p>
    </div>
  );
}
