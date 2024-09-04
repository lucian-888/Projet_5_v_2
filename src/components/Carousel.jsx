import { useState } from 'react';
import './carousel.scss';
import arrowLeft from '../assets/arrow_left.png';
import arrowRight from '../assets/arrow_right.png';


// Composant Carousel qui prend un tableau 'pictures' comme prop
function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0); // État pour l'index de l'image actuelle

  // Fonction pour gérer le clic sur le bouton précédent
  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Fonction pour gérer le clic sur le bouton suivant
  const handleNextClick = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      {/* Conteneur de l'image */}
      <div className="carousel__image-container">
        {/* Affiche l'image correspondant à l'index courant */}
        <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1} of ${pictures.length}`} className="carousel__image" />
        
        {/* Compteur d'images */}
        {pictures.length > 1 && (
          <div className="carousel__counter">
            {currentIndex + 1} / {pictures.length}
          </div>
        )}

        {/* Affiche les boutons seulement s'il y a plus d'une image */}
        {pictures.length > 1 && (
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
        )}
      </div>
    </div>
  );
}

export default Carousel;
