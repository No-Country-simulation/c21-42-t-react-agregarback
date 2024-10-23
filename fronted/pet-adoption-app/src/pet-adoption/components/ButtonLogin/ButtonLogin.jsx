import React from 'react';

const ButtonLogin = ({ children, onClick, variant = 'primary', ariaLabel, disabled }) => {
  const baseClasses = 'w-[22rem] px-6 py-4 rounded-xl font-semibold flex justify-center items-center mb-2';
  const variants = {
    primary: 'text-white bg-blue-primary',
    secondary: 'text-blue-primary border border-neutral-gray bg-main-background',
    textOnly: 'text-secondary-orange font-semibold underline',
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${variants[variant]}`} 
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonLogin;
