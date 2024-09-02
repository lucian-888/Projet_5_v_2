import starFilled from '../assets/stars_on.png'; 
import starEmpty from '../assets/stars_off.png';  
import './stars.scss'

function Stars({ rating }) {
  const maxRating = 5; // Maximum rating
  const ratingNumber = parseInt(rating); // Convert rating to a number

  return (
    <div className="stars">
      {[...Array(maxRating)].map((_, index) => (
        <img
          key={index}
          src={index < ratingNumber ? starFilled : starEmpty}
          alt={index < ratingNumber ? "Filled star" : "Empty star"}
          className="star"
        />
      ))}
    </div>
  );
}

export default Stars;
