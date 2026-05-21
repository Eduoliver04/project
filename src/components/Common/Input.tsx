import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  className = '',
  ...props
}) => {
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-bold mb-2 text-gray-800">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`
          border border-gray-300 rounded px-4 py-2 w-full
          focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-200
          transition ${error ? 'border-red-500' : ''} ${className}
        `}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};
