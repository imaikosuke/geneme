import React, { FC } from 'react';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  visual?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ size = 'medium', visual = 'primary', children, className = '', ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${
        size === 'small' ? 'text-sm' : size === 'medium' ? 'text-md' : 'text-lg'
      } ${
        visual === 'primary'
          ? 'bg-black text-white font-bold rounded-lg hover:bg-red hover:text-grey'
          : 'border-4 border-red text-red font-bold rounded-lg hover:bg-white hover:text-green'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;