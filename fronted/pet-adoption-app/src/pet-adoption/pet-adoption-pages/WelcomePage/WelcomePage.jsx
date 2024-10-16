import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <img src="src/assets/status-bar.jpg" alt="status bar" className="w-full"/>
      <div className="flex flex-col justify-end items-center h-screen p-5 bg-main-background">
        <div className="p-4 mb-12">
          <h1 className="text-2xl font-semibold ">¡Tu compañero te está esperando!</h1>
          <p className="font-normal pt-4 pb-4">Estás a solo unos pasos de darle un hogar a un nuevo amigo peludo.</p>
          <p className="font-semibold">Conectamos corazones humanos con patitas que necesiten un hogar</p>
        </div>
        <div className="flex flex-col mb-2">
          <button className="w-[22rem] px-6 py-4 mb-1 rounded-xl text-white  bg-blue-primary" aria-label="Crear una cuenta">Crear una cuenta</button>
          <button className="w-[22rem] px-6 py-4 rounded-xl text-blue-primary border border-[#E8F7FE]" aria-label="Iniciar sesión">Iniciar sesión</button>
        </div>
        <img src="src/assets/paw-prints.png" alt="paw-prints" className="absolute right-[4rem] bottom-[-3.5rem]"/>
      </div>
    </>
  );
};

export default WelcomePage;