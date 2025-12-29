"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthForm({ type }: { type: "login" | "signup" }) {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL; // Backend URL

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Signup validation
    if (type === "signup" && form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      if (type === "login") {
        // Login API
        const res = await fetch(`${API_URL}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ usernameOrEmail: form.email, password: form.password }),
        });

        if (!res.ok) {
          const msg = await res.text();
          setError(msg || "Invalid Credentials");
          return;
        }

        // Success → Redirect dashboard
        router.push("/dashboard");

      } else {
        // Signup API
        const res = await fetch(`${API_URL}/api/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ 
            username: form.username || form.email.split("@")[0], 
            email: form.email, 
            password: form.password 
          }),
        });

        if (!res.ok) {
          const msg = await res.text();
          setError(msg || "Registration failed");
          return;
        }

        // Success → Redirect dashboard
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <Link href="/" className="mb-8 text-4xl font-extrabold text-red-600 hover:text-red-500 transition">
        StreamX
      </Link>

      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          {type === "login" ? "Welcome Back 👋" : "Create an Account 🚀"}
        </h2>

        {error && (
          <p className="bg-red-700 text-white p-2 rounded mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "signup" && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
          />

          {type === "signup" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
            />
          )}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded-lg text-white font-semibold"
          >
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
