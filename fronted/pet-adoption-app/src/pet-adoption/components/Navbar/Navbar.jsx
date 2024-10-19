import Logo from "../../../assets/logo.png";
import Burger from "../../../assets/burger-menu-icon.png";
import Close from "../../../assets/close-menu-icon.png";
import User from "../../../assets/user-menu-icon.png";
import "../Navbar/Navbar.css"
import { useState } from "react";

const Navbar = () => {
    const [navbar, setNavbar] = useState(true);
    const [dropOne, setDropOne] = useState(false);
    const [dropTwo, setDropTwo] = useState(false);

  const handlerMenu = (e) => {
    e.preventDefault();
    setNavbar(!navbar);
  };

  const handlerDropOne = (e)=>{
    e.preventDefault();
    setDropOne(!dropOne);
  }

  const handlerDropTwo = (e)=>{
    e.preventDefault();
    setDropTwo(!dropTwo);
  }

  return (
    <header className="bg-[#F4F0EF] flex justify-around p-5 lg:px-16 lg:py-2 lg:items-center lg:justify-between">
      <a href="">
        <img src={Logo} alt="dog" />
      </a>
      <a href="" onClick={handlerMenu}>
        <img src={Burger} alt="" className={`${navbar ? "flex lg:hidden" : "hidden"}`} />
      </a>

      <nav
        className={`${
          navbar ? "hidden lg:flex" : "flex absolute lg:static"
        } bg-[#F4F0EF] top-0 w-full p-6 h-full flex-col lg:items-center lg:w-[750px] lg:justify-start`}
      >
        <div className="flex justify-around lg:hidden items-center lg:items-start">
          <div>
            <img src={User} alt="user-icon" />
            <h4>nombre de usuario</h4>
          </div>
          <img
            src={Close}
            alt=""
            className={`${navbar ? "hidden" : "flex"} w-10 h-10`}
            onClick={handlerMenu}
          />
        </div>
        <hr className="border-gray-400 mt-3 lg:hidden" />

        <div
          className={`${
            navbar ? "hidden" : "flex"
          } text-[18px] flex-col column mt-10 mx-auto w-[300px] my-auto items-center lg:flex lg:flex-row lg:m-0`}
        >
          
          <div className="mt-10 lg:mt-0">
            <button className="flex w-40 justify-between items-center text-[22px] " onClick={handlerDropOne}>
              Adopta
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#115372"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              
            </button>
            <div className={`${dropOne ? "flex flex-col" : "hidden" } lg:absolute lg:bg-white lg:w-40 lg:p-5 text-[20px] rounded-md`}>
            <ul className="text-gray-600">
              <li>Adoptar</li>
              <li>Poner en adopción</li>
              <li>Guía de adopción</li>
            </ul>
            </div>
          </div>


          <div>
          <button className=" my-1  text-left text-[22px] mt-10 w-40 lg:mt-0 lg:px-3 lg:w-30 lg:text-center ">Favoritos</button>
          </div>
         

          <div className="mt-10 lg:mt-0">
          <button className="flex w-40 justify-between items-center text-[22px] lg:w-30" onClick={handlerDropTwo}>
              Perfil
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#115372"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              
            </button>
            <div className={`${dropTwo ? "block" : "hidden"} lg:absolute lg:bg-white lg:w-40 lg:p-5 text-[20px] rounded-md`}>
            <ul className= "text-gray-600">
              <li>Mis datos</li>
              <li>Cerrar sesión</li>
            </ul>
            </div>
          </div>
        </div>
      </nav>


    </header>
  );
};

export default Navbar;

//md:flex utilizar esta clase para manejar el estado del nav
