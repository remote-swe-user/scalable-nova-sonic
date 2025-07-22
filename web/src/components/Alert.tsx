import React from 'react';

interface AlertProps {
  title: string;
  children: React.ReactNode;
  severity?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  title,
  children,
  severity = 'info',
  className = '',
}) => {
  const getColorsByType = () => {
    switch (severity) {
      case 'success':
        return 'bg-green-50 text-green-800 border-green-200';
      case 'warning':
        return 'bg-yellow-50 text-yellow-800 border-yellow-200';
      case 'error':
        return 'bg-red-50 text-red-800 border-red-200';
      case 'info':
      default:
        return 'bg-blue-50 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className={`border rounded-md p-4 ${getColorsByType()} ${className}`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Alert;
