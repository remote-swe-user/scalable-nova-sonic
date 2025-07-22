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
    <div className={`mb-4 ${className}`}>
      <div
        className="flex items-center cursor-pointer p-2 border-b"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex-1 font-semibold">{label}</div>
        <div className="text-lg">
          {isExpanded ? '▼' : '▶'}
        </div>
      </div>
      {isExpanded && <div className="p-2">{children}</div>}
    </div>
  );
};

export default ExpandableField;
