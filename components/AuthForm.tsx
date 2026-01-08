"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthForm({ type }: { type: "login" | "signup" }) {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (type === "signup" && form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(
        `${API_URL}/api/auth/${type === "login" ? "login" : "signup"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            type === "login"
              ? { email: form.email, password: form.password }
              : {
                  username: form.username || form.email.split("@")[0],
                  email: form.email,
                  password: form.password,
                }
          ),
        }
      );

      // ❗ SAFE JSON PARSE
      let data: any = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (!res.ok) {
        setError(data.message || "Request failed");
        return;
      }

      // ✅ SIGNUP SUCCESS → LOGIN PAGE
      if (type === "signup") {
        router.push("/auth/login");
        return;
      }

      // ✅ LOGIN SUCCESS (future: token store here)
      if (type === "login") {
        router.push("/dashboard");
      }

    } catch (err) {
      console.error(err);
      setError("Server not reachable");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-2xl shadow-xl">

        <Link href="/" className="block text-center text-4xl font-bold text-red-600 mb-6">
          StreamX
        </Link>

        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          {type === "login" ? "Welcome Back 👋" : "Create Account 🚀"}
        </h2>

        {error && (
          <p className="bg-red-700 text-white p-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "signup" && (
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 text-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-800 text-white"
          />

          {type === "signup" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
          )}

          <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded text-white">
            {type === "login" ? "Login" : "Signup"}
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-4">
          {type === "login" ? (
            <>
              No account?{" "}
              <Link href="/auth/signup" className="text-red-400">
                Signup
              </Link>
            </>
          ) : (
            <>
              Already registered?{" "}
              <Link href="/auth/login" className="text-red-400">
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
