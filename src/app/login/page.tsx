import LoginBackground from "@/components/login/LoginBackground";
import LoginHeader from "@/components/login/LoginHeader";
import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Background Layers */}
      <LoginBackground />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Logo and Title */}
        <LoginHeader />

        {/* Login Card */}
        <div className="max-w-[420px] w-full">
          <LoginForm />
        </div>

        {/* Bottom Text */}
        <p className="text-white/25 text-[10px] text-center mt-5 font-medium">
          Powered by Arduino Community Philippines
        </p>
      </div>
    </div>
  );
}
