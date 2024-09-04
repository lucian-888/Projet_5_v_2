import DataBase from '../data/data.json'
import { useParams, Navigate } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Collapse from '../components/Collapse'
import './logement.scss'
import Tags from '../components/Tags'
import HostInfo from '../components/HostInfo'
import Stars from '../components/Stars'


function Logement() {
  
const {id} = useParams();   // Récupère l'ID de l'élément à partir de l'URL

 // Recherche l'élément correspondant à l'ID dans la base de données
 const logement = DataBase.find(element => element.id === id);

 // Si l'élément n'existe pas, redirige vers la page erreur
 
 if (!logement) {
  return <Navigate to="*"  />;
}
 
// Si le logement est trouvé, afficher ses détails

  return (
    <div className='logement'>
      <Carousel pictures={logement.pictures} /> 

      <div className='logement-info'>
        <div className='primary-info'>
          <h1 className='title'>{logement.title}</h1>
          <h2 className='location'>{logement.location}</h2>
          <Tags tags={logement.tags} />
        </div>

        <div className='secondary-info'>
          <HostInfo name={logement.host.name} picture={logement.host.picture} /> 
          <Stars rating={logement.rating}/>
        </div>
      </div>
      
      <div className="logement-collapse">
        <Collapse name='Descriptions' elements={logement.description} />
        <Collapse name='Équipements' elements={
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> 
        } />
      </div>
    </div>
  );
}

    
    
export default Logement