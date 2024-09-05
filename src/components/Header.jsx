import { NavLink } from "react-router-dom"
import Logo from "../assets/logodesk.svg"
import LogoMobile from "../assets/logomobil.svg"
import './header.scss'


function Header() {
  

  return (

    <header>
        <picture>
            <source media="(max-width: 768px)" srcSet={LogoMobile} />
            <img src={Logo} alt="logo_site" />
        </picture>
        <div className="navbar">
            <NavLink to="/" >Accueil </NavLink>
            <NavLink to="/about" >A Propos </NavLink>
        </div>
    </header>

  )
}

export default Header
