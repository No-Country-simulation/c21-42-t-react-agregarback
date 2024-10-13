import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/personal-data');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <img src="src/assets/status-bar.jpg" alt="status bar" className="w-full"/>
      <div className="flex flex-col justify-center items-center h-screen p-5 bg-[#F4F0EF]">
        <div className="p-4 mb-12">
          <h1 className="text-2xl font-semibold ">Crear cuenta</h1>
          <input></input>
          <button className="w-[22rem] px-6 py-4 mb-1 rounded-xl text-white  bg-[#0C5A87]">Crear una cuenta</button>
        </div>
        <div>
          <div>
            <p>O</p>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <button className="w-[22rem] px-6 py-4 mb-1 rounded-xl text-white  bg-[#0C5A87]">Continuar con Google</button>
          <button className="w-[22rem] px-6 py-4 mb-1 rounded-xl text-white  bg-[#0C5A87]">Continuar con Apple</button>
          <button className="w-[22rem] px-6 py-4 mb-1 rounded-xl text-white  bg-[#0C5A87]">Continuar con Meta</button>
          <button className="w-[22rem] px-6 py-4 rounded-xl text-[#0C5A87] border border-[#E8F7FE]">Iniciar sesión</button>
        </div>
        <img src="src/assets/paw-prints.png" alt="paw-prints" className="absolute right-[4rem] bottom-[-3.5rem]"/>
      </div>
    </>
  );
};

export default CreateAccount;