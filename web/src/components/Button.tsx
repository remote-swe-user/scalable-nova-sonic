import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  outlined?: boolean;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  outlined = false,
  className = '',
  disabled = false,
  ...rest
}) => {
  const baseClasses = 'flex items-center justify-center px-4 py-2 rounded focus:outline-none transition-colors';
  const outlinedClasses = outlined
    ? 'border border-gray-700 text-gray-700 hover:bg-gray-100'
    : 'bg-blue-600 text-white hover:bg-blue-700';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      className={`${baseClasses} ${outlinedClasses} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
