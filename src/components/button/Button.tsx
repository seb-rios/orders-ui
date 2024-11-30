import React from "react";

interface ButtonProps {
  label: string;
  type?: "info" | "success" | "warning" | "error";
  onClick?: () => Promise<void> | void;
  disabled?: boolean;
  size?: "responsive" | "xs" | "sm" | "md" | "lg";
  className?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "info",
  onClick,
  disabled = false,
  size = "md",
  className = "",
  isLoading = false,
}) => {
  const handleClick = async () => {
    if (onClick) {
      await onClick();
    }
  };

  const sizeClass =
    size === "responsive"
      ? "btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      : `btn-${size}`;

  return (
    <button
      className={`btn btn-${type} ${sizeClass} ${className}`}
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {isLoading && <span className="loading loading-spinner mr-2"></span>}
      {label}
    </button>
  );
};

export default Button;
