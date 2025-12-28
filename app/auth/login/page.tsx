// app/auth/login/page.tsx
import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <AuthForm type="login" />
    </section>
  );
}
