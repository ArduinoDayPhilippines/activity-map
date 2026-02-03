"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    setIsLoading(true);
    console.log(email, password);

  //   try {
  //     const response = await fetch("/api/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       setError("Invalid credentials. Please try again.");
  //       return;
  //     }

  //     if (data.ok) {
  //       router.push("/dashboard");
  //     } else {
  //       setError("Login failed. Please try again.");
  //     }
  //   } catch (err) {
  //     console.error("Login error:", err);
  //     setError("Network error. Please check your connection.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  };

  return (
    <div
      className="
      relative overflow-hidden
      bg-[rgba(255,255,255,0.03)]
      backdrop-blur-md
      border border-[rgba(255,255,255,0.15)]
      rounded-[24px]
      p-8
      shadow-[0_8px_32px_rgba(0,0,0,0.4)]
    "
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Error message */}
        {error && (
          <div className="bg-red-500/10 border border-red-400/30 rounded-xl px-4 py-3 mb-4">
            <p className="text-red-200 text-xs text-center">{error}</p>
          </div>
        )}

        {/* Email Input */}
        <FormInput
          type="email"
          label="Email"
          placeholder="email@arduinoday.ph"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
          disabled={isLoading}
          isFocused={focusedField === "email"}
        />

        {/* Password Input */}
        <FormInput
          variant="password"
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setFocusedField("password")}
          onBlur={() => setFocusedField(null)}
          disabled={isLoading}
          isFocused={focusedField === "password"}
        />

        {/* Forgot Password */}
        <div className="text-right pt-1">
          <Button
            type="button"
            variant="link"
            size="sm"
            disabled={isLoading}
            className="text-[11px] font-medium"
          >
            Forgot password?
          </Button>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          variant="muted"
          isLoading={isLoading}
          loadingText="Logging in..."
          className="mt-4"
          fullWidth
        >
          Login to Dashboard
        </Button>
      </form>
    </div>
  );
}
