import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonLogin from '../../components/ButtonLogin/ButtonLogin';
import GoogleIcon from '../../components/SocialMediaIcons/GoogleIcon';
import AppleIcon from '../../components/SocialMediaIcons/AppleIcon';
import MetaIcon from '../../components/SocialMediaIcons/MetaIcon';

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
      <div className="flex flex-col justify-center items-center h-screen p-5 bg-main-background">
        <form className="p-4">
          <h1 className="text-2xl font-semibold text-neutral-gray">Crear cuenta</h1>
          <input className="w-[22rem] h-14 my-7 pl-4 rounded-lg bg-main-background border border-neutral-gray placeholder-neutral-gray" placeholder="Correo electronico" aria-label="Correo electrónico"></input>
          <button className="w-[22rem] px-6 py-4 mb-1 rounded-xl text-white  bg-blue-primary">Crear una cuenta</button>
        </form>
        <div>
          <div className="flex flex-row my-7">
            <svg width="167" height="2" viewBox="0 0 167 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.780334" y1="1.38818" x2="167.001" y2="1.38818" stroke="#484646"/>
            </svg>
            <p className="px-3">O</p>
            <svg width="167" height="2" viewBox="0 0 167 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.780334" y1="1.38818" x2="167.001" y2="1.38818" stroke="#484646"/>
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-2">
           <ButtonLogin variant="secondary" ariaLabel="Continuar con Google">
            <GoogleIcon></GoogleIcon>
          </ButtonLogin>
          <ButtonLogin variant="secondary" ariaLabel="Continuar con Apple">
            <AppleIcon></AppleIcon>
          </ButtonLogin>
          <ButtonLogin variant="secondary" ariaLabel="Continuar con Facebook">
            <MetaIcon></MetaIcon>
          </ButtonLogin>
          <ButtonLogin variant="textOnly" ariaLabel="Iniciar sesión">Iniciar sesión</ButtonLogin>
        </div>
        <img src="src/assets/paw-prints.png" alt="paw-prints" className="absolute right-[2rem] bottom-[3rem]"/>
      </div>
    </>
  );
};

export default CreateAccount;