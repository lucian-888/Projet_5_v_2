import DataBase from '../data/data.json'
import { useParams, useNavigate } from 'react-router-dom'
import Erreur from './Erreur'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'
import './logement.scss'

function Logement() {
  
const {id} = useParams();   // Récupère l'ID de l'élément à partir de l'URL
const navigate = useNavigate();  // Utilisé pour naviguer vers la page erreur

  // Recherche l'élément correspondant à l'ID dans la base de données
 const logement = DataBase.find(element => element.id === id);

 // Si l'élément n'existe pas, redirige vers la page erreur
 if (!logement) {
  navigate("*");
    return null; // Return null to avoid rendering anything before the navigation
 }  

 // Si le logement est trouvé, afficher ses détails
 return (
    <div className='logement'>
    
      <Carousel pictures={logement.pictures} /> 
      <h1 className='title'>{logement.title}</h1>
      <h2>host: name, picture</h2>
      <h2>Location</h2>
      <h2>Tags</h2>
      <h2>Stars</h2>
      <div className="logement-collapse">
              <Collapse name='Descriptions' elements="ici descriptons"/>
              < Collapse name='Equipements' elements="ici equipements" />
      </div>
  </div>
);
}
    
    
    
export default Logement