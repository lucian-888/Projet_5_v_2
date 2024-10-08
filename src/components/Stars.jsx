import starFilled from '../assets/stars_on.png'; 
import starEmpty from '../assets/stars_off.png';  
import './stars.scss'


function Stars({ rating }) {
  const maxRating = 5;
  const ratingNumber = parseInt(rating); // Convertir rating en un nombre


  return (

    <div className="stars">
      {/* Utilisation de la méthode Array pour créer un tableau temporaire d'une longueur égale à maxRating.
      La méthode map() est ensuite utilisée pour itérer sur chaque élément du tableau.*/}
      {[...Array(maxRating)].map((_, index) => (
        <img
          key={index}
          // Si l'index est inférieur à ratingNumber, une étoile remplie est affichée, sinon une étoile vide.
          src={index < ratingNumber ? starFilled : starEmpty}
          alt={index < ratingNumber ? "Filled star" : "Empty star"}
          className="star"
        />
      ))}
    </div>
    
  );
}

export default Stars;
