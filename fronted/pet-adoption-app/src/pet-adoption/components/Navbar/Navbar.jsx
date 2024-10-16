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
    <header className="bg-[#F4F0EF] flex justify-around p-5 header-desktop">
      <a href="">
        <img src={Logo} alt="dog" />
      </a>
      <a href="" onClick={handlerMenu}>
        <img src={Burger} alt="" className={`${navbar ? "flex" : "hidden"}`} />
      </a>

      <nav
        className={`${
          navbar ? "hidden" : "block absolute"
        } bg-[#F4F0EF] top-0 w-full py-5 p-4 h-full nav-desktop`}
      >
        <div className={`${navbar ? "hidden" : "flex"} flex justify-around`}>
          <div>
            <img src={User} alt="user-icon" />
            <h4>nombre de usuario</h4>
          </div>
          <img
            src={Close}
            alt=""
            className={`${navbar ? "hidden" : "flex"} w-10 h-10 self-center`}
            onClick={handlerMenu}
          />
        </div>
        <hr className="border-gray-400 max-w-96 mx-auto mt-5" />
        <div
          className={`${
            navbar ? "hidden" : "flex"
          } text-[18px] flex-col mt-5 column mt-10 mx-auto w-[300px] my-auto`}
        >
        
          <div className="mt-10">
            <button className="flex w-full justify-between text-[20px]" onClick={handlerDropOne}>
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
            <ul className={`${dropOne ? "block" : "hidden" } text-gray-600`}>
              <li>Adoptar</li>
              <li>Poner en adopción</li>
              <li>Guía de adopción</li>
            </ul>
          </div>

          <button className=" my-1  text-left text-[20px] mt-10">Favoritos</button>

          <div className="mt-10">
            <button className="flex justify-between  w-full text-[20px]" onClick={handlerDropTwo}>
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
            <ul className={`${dropTwo ? "block" : "hidden"} text-gray-600 `}>
              <li>Mis datos</li>
              <li>Cerrar sesión</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

//md:flex utilizar esta clase para manejar el estado del nav
