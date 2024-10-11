import Logo from "../../../assets/logo.png";
import Burger from "../../../assets/burger-menu-icon.png";
import Close from "../../../assets/close-menu-icon.png";
import { useState } from "react"
const Navbar = () =>{

    const [navbar, setNavbar] = useState(false);

    const handlerMenu = (e) =>{
        e.preventDefault()
        setNavbar(!navbar)
    }
return (
    <header className="bg-[#F4F0EF] flex justify-around p-5">
    <a href="">
    <img src={Logo} alt="dog" />
    </a>
    <a href="">
    <img src={Burger} alt="" onClick={handlerMenu} className={`${navbar ? "flex" : "hidden"}`}/>
    </a>

    <nav className={`${navbar ? "hidden" : "flex"}`}>
        
    <ul className={`${navbar ? "hidden" : "flex"} place-content-around text-[18px] w-full flex-col mt-5`}>
        {/*${navbar ? ""} */}
        <li><a href="">Adopta</a>
        <ul>
            <li>Adoptar</li>
            <li>Poner en adopción</li>
            <li>Guía de adopción</li>
        </ul>
        </li>
        <li><a href="">Favoritos</a></li>
        <li><a href="">Perfil</a>
        <ul>
            <li>Mis datos</li>
            <li>Cerrar sesión</li>
        </ul>
        </li>
    </ul>
    <img src={Close} alt="" className={`${navbar ? "hidden" : "flex"} w-10 h-10`} onClick={handlerMenu}/>
</nav>
    </header>
    
)
}

export default Navbar;

//md:flex utilizar esta clase para manejar el estado del nav