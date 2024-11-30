import React from "react";

export interface DropdownOption {
  value: string | number;
  label: string;
}

interface DropdownProps {
  label?: string;
  altLabel?: string;
  options: DropdownOption[];
  selectedValue?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  altLabel,
  options,
  selectedValue,
  onChange,
  placeholder = "Select an option",
  disabled = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <label className="form-control w-full max-w-xs">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
          {altLabel && <span className="label-text-alt">{altLabel}</span>}
        </div>
      )}
      <select
        className="select select-bordered"
        value={selectedValue}
        onChange={handleChange}
        disabled={disabled}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {altLabel && (
        <div className="label">
          <span className="label-text-alt">{altLabel}</span>
        </div>
      )}
    </label>
  );
};

export default Dropdown;
