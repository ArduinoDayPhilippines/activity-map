"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { loginUser } from "@/lib/api";

export default function LoginPage() {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await loginUser({ email: emailOrUsername, password });

            if (response.success) {
                toast.success(response.message);
            } else {
                toast.error(response.message);
            }
        } catch {
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white flex flex-col">
            {/* Main Content - Centered */}
            <main className="flex flex-1 flex-col items-center justify-center px-6 py-8">
                {/* Login Form Container */}
                <div className="w-full max-w-md">
                    {/* ADPH Logo - Centered */}
                    <div className="flex flex-col items-center mb-8">
                        <img
                            src="/adph-logo.png"
                            alt="Arduino Days Philippines 2026"
                            className="h-48 w-auto md:h-56"
                        />
                    </div>

                    {/* Form Card */}
                    <div className="rounded-2xl border border-teal-500/50 bg-slate-900/80 p-6 shadow-lg shadow-teal-500/10 backdrop-blur-sm md:p-8">
                        <h2 className="mb-2 text-2xl font-bold text-white text-center md:text-3xl">
                            Welcome Back!
                        </h2>
                        <p className="mb-6 text-sm text-gray-400 text-center">
                            Sign in to access your account
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="emailOrUsername"
                                    className="mb-2 block text-sm font-medium text-teal-400"
                                >
                                    Email / Username <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    id="emailOrUsername"
                                    type="text"
                                    value={emailOrUsername}
                                    onChange={(e) => setEmailOrUsername(e.target.value)}
                                    className="h-12 rounded-lg border-teal-600/50 bg-slate-800/50 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500/30"
                                    placeholder="Enter your email or username"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium text-teal-400"
                                >
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="h-12 rounded-lg border-teal-600/50 bg-slate-800/50 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500/30"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="h-12 w-full rounded-lg bg-teal-600 text-base font-semibold text-white transition-all hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/25 disabled:opacity-70"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <svg
                                            className="h-5 w-5 animate-spin"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Loading...
                                    </span>
                                ) : (
                                    "Login"
                                )}
                            </Button>

                            {/* Register Link - Static/Non-clickable */}
                            <p className="text-center text-sm text-gray-400">
                                Don&apos;t have an account?{" "}
                                <span className="text-teal-400 cursor-default">Register</span>
                            </p>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 text-center text-sm text-gray-500">
                © 2026 Arduino Day Philippines. All rights reserved.
            </footer>
        </div>
    );
}
