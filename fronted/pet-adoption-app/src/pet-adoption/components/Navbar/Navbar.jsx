import Logo from "../../../assets/pet-connection-icon.png";
import Burger from "../../../assets/burger-menu-icon.png";
import Close from "../../../assets/close-menu-icon.png";
import User from "../../../assets/user-menu-icon.png";
import Chat from "../../../assets/chat-icon.svg";
import "../Navbar/Navbar.css"
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    <header className="bg-[#F4F0EF] flex justify-evenly p-5 lg:py-2 lg:items-center ">
      
        <img src={Burger} alt="" className={`${navbar ? "flex lg:hidden" : "hidden"}`}  onClick={handlerMenu}/>
      <Link to="/">
        <img src={Logo} alt="dog" />
      </Link>
      <Link to="">
        <img src={Chat} alt="" className="self-center w-9 lg:hidden"/>
      </Link>
      <nav
        className={`${
          navbar ? "hidden lg:flex" : "flex absolute lg:static"
        } bg-[#F4F0EF] top-0 w-full p-6 h-full flex-col lg:items-center lg:w-[750px] lg:justify-start z-30`}
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
        <hr className="border-[#0c5a87] mt-3 lg:hidden border-t-2" />

        <div
          className={`${
            navbar ? "hidden" : "flex"
          } text-[18px] flex-col column mt-10 mx-auto w-[300px] my-auto items-center lg:flex lg:flex-row lg:m-0`}
        >
          
          <div className="mt-10 lg:mt-0 ">
            <button className="flex w-[200px] justify-between items-center text-[24px] text-blue-primary-30 font-bold" onClick={handlerDropOne}>
              Adopta
              <TiArrowSortedDown color="#cb7a01"/>
              
            </button>
            <div className={`${dropOne ? "flex flex-col" : "hidden" } lg:absolute lg:bg-white lg:w-[200px] lg:p-2 text-[19px] rounded-md text-nowrap`}>
            <ul className="text-gray-600 text-[20px]">
              <li><Link to="/home-adopt" className="text-blue-primary-30">Adoptar</Link></li>
              <li><Link to="/home-put-up-for-adoption" className="text-blue-primary-30">Poner en adopción</Link></li>
              <li><Link to="" className="text-blue-primary-30">Guía de adopción</Link></li>
            </ul>
            </div>
          </div>


          <div>
          <button className=" my-1  text-left text-[24px] mt-10 w-[200px] lg:mt-0 lg:px-3 lg:w-30 lg:text-center text-blue-primary-30 font-bold lg:w-[155px]"><Link to="">Guardados</Link></button>
          </div>
         

          <div className="mt-10 lg:mt-0">
          <button className="flex w-[200px] justify-between items-center text-[24px] lg:w-30 text-blue-primary-30 font-bold" onClick={handlerDropTwo}>
              Perfil
              <TiArrowSortedDown color="#cb7a01"/>
              
            </button>
            <div className={`${dropTwo ? "block" : "hidden"} lg:absolute lg:bg-white lg:w-[200px] lg:p-6 text-[20px] rounded-md box-border`}>
            <ul className= "text-gray-600">
              <li><Link to="/personal-data" className="text-blue-primary-30">Mis datos</Link></li>
              <li><Link to="/login" className="text-blue-primary-30">Cerrar sesión</Link></li>
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
