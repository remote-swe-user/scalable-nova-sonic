import React from 'react';

interface SwitchProps {
  checked: boolean;
  onSwitch: (checked: boolean) => void;
  label?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onSwitch, label }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onSwitch(e.target.checked)}
        />
        <div className={`w-10 h-5 rounded-full transition-colors ${
          checked ? 'bg-blue-500' : 'bg-gray-300'
        }`} />
        <div className={`absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform ${
          checked ? 'transform translate-x-5' : ''
        }`} />
      </div>
      {label && <span className="ml-2 text-sm">{label}</span>}
    </label>
  );
};

export default Switch;
