import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "muted" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const variantStyles = {
  primary:
    "bg-gradient-to-r from-primary to-[#006666] hover:from-[#009999] hover:to-primary text-white shadow-lg shadow-primary/20",
  secondary:
    "bg-gradient-to-r from-secondary to-[#d66802] hover:from-[#ff8a1a] hover:to-secondary text-white shadow-lg shadow-secondary/20",
  muted: "bg-[rgba(35,60,60,0.6)] hover:bg-[rgba(35,60,60,0.7)] text-[#95b5b5]",
  outline:
    "border-2 border-primary text-primary hover:bg-primary/10 bg-transparent",
  link: "bg-transparent text-[#6dd8d8] hover:text-[#8de5e5] p-0 shadow-none",
};

const sizeStyles = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3.5 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      loadingText = "Loading...",
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-semibold rounded-xl transition-all duration-200",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className,
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            {loadingText}
          </span>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
