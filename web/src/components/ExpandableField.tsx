import React, { useState } from 'react';

interface ExpandableFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  defaultExpanded?: boolean;
}

const ExpandableField: React.FC<ExpandableFieldProps> = ({
  label,
  children,
  className = '',
  defaultExpanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`border rounded shadow-sm ${className}`}>
      <button
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-medium">{label}</span>
        <span className="transform transition-transform">
          {isExpanded ? '▼' : '▲'}
        </span>
      </button>
      <div className={`px-4 pb-4 ${isExpanded ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

export default ExpandableField;
