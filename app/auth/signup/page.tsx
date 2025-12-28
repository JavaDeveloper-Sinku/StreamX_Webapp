// app/auth/signup/page.tsx
import AuthForm from "@/components/AuthForm";

export default function SignupPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <AuthForm type="signup" />
    </section>
  );
}
