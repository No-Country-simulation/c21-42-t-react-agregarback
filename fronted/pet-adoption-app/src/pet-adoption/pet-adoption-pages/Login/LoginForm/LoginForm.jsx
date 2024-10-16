import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Form submitted:', { email, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl font-semibold text-neutral-gray">Iniciar sesión</h1>
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[22rem] h-14 my-7 pl-4 rounded-lg bg-main-background border border-neutral-gray placeholder-neutral-gray" 
        placeholder="Correo electrónico" 
      />
      <div className="relative w-[22rem] h-14 mb-7 pl-4 bg-main-background border border-neutral-gray rounded-lg flex items-center">
        <input 
          type={showPassword ? 'text' : 'password'} 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-full bg-transparent outline-none placeholder-neutral-gray pl-1" 
          placeholder="Contraseña" 
        />
        <button 
          type="button" 
          onClick={togglePasswordVisibility} 
          className="absolute right-4 focus:outline-none"
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.512C6.354 4.822 9.726 3 12 3c4.565 0 8.175 4.495 9.49 6.063.233.274.233.6 0 .874-1.315 1.568-4.925 6.063-9.49 6.063-2.274 0-5.646-1.822-8.02-5.512a.873.873 0 010-.874zm6.775 3.523a3 3 0 104.485-4.485" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-3-3" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.512A11.988 11.988 0 0112 6c4.565 0 8.175 4.495 9.49 6.063.233.274.233.6 0 .874a11.988 11.988 0 01-8.995 4.988M9 9l-6 6m9-9l6 6" />
            </svg>
          )}
        </button>
      </div>
      <button type="submit" className="w-[22rem] px-6 py-4 mb-1 rounded-xl text-white bg-blue-primary">Continuar</button>
    </form>
  );
};

export default LoginForm;