import React from "react";

interface InputProps {
  label?: string;
  altLabel?: string;
  bottomLeftLabel?: string;
  bottomRightLabel?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password" | "number";
  error?: boolean;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  altLabel,
  bottomLeftLabel,
  bottomRightLabel,
  placeholder = "Type here",
  value,
  onChange,
  type = "text",
  error = false,
  disabled = false,
  className = "",
}) => {
  return (
    <label className="form-control w-full max-w-xs">
      {(label || altLabel) && (
        <div className="label">
          {label && <span className="label-text">{label}</span>}
          {altLabel && <span className="label-text-alt">{altLabel}</span>}
        </div>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input input-bordered w-full max-w-xs ${
          error ? "input-error" : ""
        } ${className}`}
        disabled={disabled}
      />

      {(bottomLeftLabel || bottomRightLabel) && (
        <div className="label">
          {bottomLeftLabel && (
            <span className="label-text-alt">{bottomLeftLabel}</span>
          )}
          {bottomRightLabel && (
            <span className="label-text-alt">{bottomRightLabel}</span>
          )}
        </div>
      )}
    </label>
  );
};

export default Input;
