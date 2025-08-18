import React, { useState } from "react";
import clsx from "clsx";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-gray-300 focus:ring focus:ring-blue-300",
  outlined: "border border-gray-400 focus:ring focus:ring-blue-400",
  ghost: "border-none bg-transparent focus:ring focus:ring-blue-200",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  variant = "outlined",
  size = "md",
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="font-medium text-gray-700">{label}</label>}
      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={invalid}
          className={clsx(
            "rounded-md w-full focus:outline-none",
            sizeClasses[size],
            variantClasses[variant],
            invalid && "border-red-500",
            disabled && "bg-gray-200 cursor-not-allowed"
          )}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
        {loading && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 animate-spin">
            ⏳
          </div>
        )}
      </div>
      {invalid && errorMessage ? (
        <span className="text-red-600 text-sm">{errorMessage}</span>
      ) : (
        helperText && <span className="text-gray-500 text-sm">{helperText}</span>
      )}
    </div>
  );
};
