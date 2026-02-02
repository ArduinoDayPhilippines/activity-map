import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  isFocused?: boolean;
  variant?: "default" | "password";
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      className,
      label,
      error,
      isFocused,
      type = "text",
      variant = "default",
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPasswordVariant = variant === "password";
    const inputType = isPasswordVariant
      ? showPassword
        ? "text"
        : "password"
      : type;

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-[#9dd5d5] text-[11px] font-medium block">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={inputType}
            ref={ref}
            className={cn(
              "w-full",
              "bg-[rgba(15,30,30,0.9)]",
              "border",
              isFocused ? "border-[#7dc5c5]" : "border-[#5da5a5]",
              "rounded-xl",
              "px-4 py-3",
              isPasswordVariant && "pr-12",
              "text-[#d5e5e5] text-sm",
              "placeholder:text-[rgba(197,213,213,0.5)]",
              "outline-none",
              "transition-all duration-200",
              "focus:border-[#7dc5c5]",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-red-400/50",
              className,
            )}
            {...props}
          />
          {isPasswordVariant && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={props.disabled}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7dc5c5] hover:text-[#9dd5d5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
        {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

export { FormInput };
