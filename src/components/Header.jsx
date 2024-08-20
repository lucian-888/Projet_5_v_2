import { NavLink } from "react-router-dom"

function Header() {
  

  return (
    <>
     <header>
        <NavLink to="/" >Accueil </NavLink>
        <NavLink to="/about" >A propos </NavLink>
    </header>
    </>
  )
}

export default Header
