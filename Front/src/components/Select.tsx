import React from "react";

interface SelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ label, value, options, onChange }) => {
  return (
    <div className=" text-dark">
      <label className="block text-sm font-medium text-dark" htmlFor={label}>
        {label} <span className="text-blue-500">*</span>
      </label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-rose-400 leading-tight focus:outline-none focus:shadow-outline"
        id={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
