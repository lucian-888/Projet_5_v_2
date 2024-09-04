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
            <div className="main-container">  {/* Début d'une div avec la classe CSS "main-container", qui sert de conteneur principal pour la liste d'éléments.*/}
            {/*Parcours du tableau "DataBase" à l'aide de la méthode map(). 
            Cette méthode itère sur chaque élément du tableau et retourne un nouvel élément JSX pour chacun d'entre eux.
            "element" représente l'élément courant dans l'itération, et "index" est l'indice de cet élément dans le tableau.*/}
                {DataBase.map((element, index) => {
                    
                    return (  // Retourne le JSX pour chaque élément du tableau
                    //Création d'un lien (Link) pour chaque élément du tableau. 
                    //La classe CSS "card-link" est appliquée pour le style du lien.
                    //Le lien redirige vers un URL spécifique à un élément utilisant l'ID de l'élément (element.id) pour générer un URL dynamique.
                    <Link className='card-link' to={`/logement/${element.id}`} key={index}>
                        {/*Insertion du composant "Card" à l'intérieur du lien.
                        Ce composant "Card" prend deux props : 
                        "title" pour le titre de la carte, qui est défini par "element.title".
                        "image" pour l'image de la carte, qui est défini par "element.cover".*/}
                        <Card title={element.title} image={element.cover} />
                    </Link>
                    );
                })}
            </div>
    </>
  )
}

export default Home
