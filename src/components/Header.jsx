import { NavLink } from "react-router-dom"
import Logo from "../assets/logodesk.svg"
import LogoMobile from "../assets/logomobil.svg"
import './header.scss'

function Header() {
  

  return (
    <>
    <header>
        {/* Section d'image responsive */}
        <picture>
            {/* Image source pour les écrans de moins de 768px de large */}
            <source media="(max-width: 768px)" srcSet={LogoMobile} />
            {/* Image par défaut pour les écrans plus larges */}
            <img src={Logo} alt="logo_site" />
        </picture>
        <div className="navbar">
            <NavLink to="/" >Accueil </NavLink>
            <NavLink to="/about" >A Propos </NavLink>
        </div>
    </header>
    </>
  )
}

export default Header
