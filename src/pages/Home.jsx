import './home.scss'
import { Link } from 'react-router-dom'
import Image from '../assets/fond1.png'
import DataBase from '../data/data.json'
import Card from '../components/Card'
import Banner from '../components/Banner'


function Home() {
  
  
  return (

    <>
      <Banner title="Chez vous, partout et ailleurs" image={Image}/>
      <div className="main-container">  
            {/*Parcours du tableau "DataBase" à l'aide de la méthode map(). */}
            {DataBase.map((element, index) => {
              return (  
                //Création d'un lien (Link) pour chaque élément du tableau. 
                <Link className='card-link' to={`/logement/${element.id}`} key={index}>
                  {/*Insertion du composant "Card" à l'intérieur du lien. */}
                  <Card title={element.title} image={element.cover} />
                </Link>
              );
            })}
      </div>
    </>
    
  )
}

export default Home
