import React from 'react';

interface SwitchProps {
  checked: boolean;
  onSwitch: (checked: boolean) => void;
  label?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onSwitch, label }) => {
  return (
    <div className="flex items-center">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={(e) => onSwitch(e.target.checked)}
        />
        <span
          className={`relative inline-block w-10 h-5 rounded-full transition-colors ${
            checked ? 'bg-blue-500' : 'bg-gray-200'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform transform ${
              checked ? 'translate-x-5' : ''
            }`}
          ></span>
        </span>
        {label && <span className="ml-2 text-sm text-gray-700">{label}</span>}
      </label>
    </div>
  );
};

export default Switch;
