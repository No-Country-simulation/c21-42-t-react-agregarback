import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='flex flex-col justify-between items-center h-screen p-5'>
      <div>
        <h1>¡Tu compañero te está esperando!</h1>
        <p>Estás a solo unos pasos de darle un hogar a un nuevo amigo peludo.</p>
        <p>Conectamos corazones humanos con patitas que necesiten un hogar</p>
      </div>
      <div>
        <button>Crear una cuenta</button>
        <button>Iniciar sesión</button>
      </div>
      <img src="" alt="" />
    </div>
  );
};

export default LoginPage;