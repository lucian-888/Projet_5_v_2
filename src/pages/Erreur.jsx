import { Link } from "react-router-dom"
import image404 from "../assets/404desk.svg"
import './erreur.scss'


function Erreur() {
  

  return (
    
        <div className="erreur">
          <img src={image404} alt='Erreur 404'/>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link  to="/">Retourner sur la page d’accueil</Link>
        </div>
    
  )
}

export default Erreur
