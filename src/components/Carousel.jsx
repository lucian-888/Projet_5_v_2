import { useState } from 'react';
import './carousel.scss';
import arrowLeft from '../assets/arrow_left.png'
import arrowRight from '../assets/arrow_right.png'

// Définition du composant Carousel qui prend un tableau 'pictures' comme prop
function Carousel({ pictures }) {
    // Utilisation du hook useState pour gérer l'index de l'image courante
    // currentIndex est la valeur actuelle, setCurrentIndex est la fonction pour la mettre à jour
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Fonction pour gérer le clic sur le bouton précédent
    const handlePrevClick = () => {
      // Vérifie si on est sur la première image
      const isFirstSlide = currentIndex === 0;
      // Si c'est la première image, on va à la dernière, sinon on décrémente l'index
      const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
      // Met à jour l'index courant
      setCurrentIndex(newIndex);
    };
  
    // Fonction pour gérer le clic sur le bouton suivant
    const handleNextClick = () => {
      // Vérifie si on est sur la dernière image
      const isLastSlide = currentIndex === pictures.length - 1;
      // Si c'est la dernière image, on retourne à la première, sinon on incrémente l'index
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      // Met à jour l'index courant
      setCurrentIndex(newIndex);
    };
  
    // Rendu du composant
    return (
      <div className="carousel">
        
  
        {/* Conteneur de l'image */}
        <div className="carousel__image-container">
          {/* Affiche l'image correspondant à l'index courant */}
          <img src={pictures[currentIndex]} alt="carousel" className="carousel__image" />
        

      
          <div className='carousel__buttons'>

              {/* Bouton précédent */}
              <button className="carousel__button carousel__button--prev" onClick={handlePrevClick}>
              <img src={arrowLeft} alt="Arrow left" />
              </button>
              
        
              {/* Bouton suivant */}
              <button className="carousel__button carousel__button--next" onClick={handleNextClick}>
              <img src={arrowRight} alt="Arrow right" />
              </button>
              </div>

        </div>
      </div>
  );
}
  

export default Carousel;
