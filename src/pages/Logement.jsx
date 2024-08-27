import DataBase from '../data/data.json'
import { useParams, useNavigate } from 'react-router-dom'
import Erreur from './Erreur'
import Carousel from '../components/Carousel'


function Logement() {
  
const {id} = useParams();  // Extract the id from the URL
const navigate = useNavigate(); // To handle navigation to the error page

 // Find the element in the DataBase with the matching id
 const logement = DataBase.find(element => element.id === id);

 // If no matching logement is found, navigate to the error page
 if (!logement) {
  navigate('/erreur');
    return null; // Return null to avoid rendering anything before the navigation
 }  

 // If logement is found, render its details
 return (
  <div>
    <h1>{logement.title}</h1>
    <Carousel pictures={logement.pictures} /> {/* Carousel for pictures */}
    {/* Add other logement details here */}
  </div>
);
}
    
    
    
    
    
    
  
//if id de useParams est = avec id de logement utilise Find function
//si Find ne trouve rien va a la page Erreur
  
  
  
  export default Logement