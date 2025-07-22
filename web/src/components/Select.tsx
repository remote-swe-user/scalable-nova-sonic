import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  className?: string;
  label?: string;
  id?: string;
  name?: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  className = '',
  label,
  id,
  name,
}) => {
  return (
    <div className={`relative ${className}`}>
      {label && <label htmlFor={id || name} className="block mb-1 text-sm font-medium text-gray-700">{label}</label>}
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full px-4 py-2 pr-8 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
