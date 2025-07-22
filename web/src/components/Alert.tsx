import React from 'react';

interface AlertProps {
  title: string;
  children: React.ReactNode;
  severity?: 'info' | 'warning' | 'error' | 'success';
  className?: string;
}

const severityClasses = {
  info: 'bg-blue-100 border-blue-400 text-blue-800',
  warning: 'bg-yellow-100 border-yellow-400 text-yellow-800',
  error: 'bg-red-100 border-red-400 text-red-800',
  success: 'bg-green-100 border-green-400 text-green-800',
};

const Alert: React.FC<AlertProps> = ({
  title,
  children,
  severity = 'info',
  className = '',
}) => {
  const severityClass = severityClasses[severity];

  return (
    <div className={`border-l-4 p-4 my-4 ${severityClass} ${className}`}>
      <div className="font-bold">{title}</div>
      <div className="text-sm">{children}</div>
    </div>
  );
};

export default Alert;
