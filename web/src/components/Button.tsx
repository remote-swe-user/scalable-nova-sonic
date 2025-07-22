import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  outlined?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  outlined = false,
  type = 'button'
}) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition duration-200 flex items-center justify-center';
  const outlinedClasses = outlined
    ? 'border border-blue-500 text-blue-500 hover:bg-blue-50'
    : 'bg-blue-500 text-white hover:bg-blue-600';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${outlinedClasses} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
