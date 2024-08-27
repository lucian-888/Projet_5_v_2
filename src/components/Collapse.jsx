import { useState, useEffect, useRef } from 'react'
import './collapse.scss'
import arrowUp from '../assets/arrow_up.png'



function Collapse({ name, elements }) {
  // État pour gérer l'ouverture/fermeture du collapse
  const [isOpen, setIsOpen] = useState(false);
  // État pour gérer la hauteur du contenu
  const [height, setHeight] = useState(0);
  // Référence pour accéder à l'élément DOM du contenu
  const contentRef = useRef(null);

  // Effet qui s'exécute chaque fois que isOpen change
  useEffect(() => {
    if (isOpen) {
      // Si ouvert, définir la hauteur sur la hauteur totale du contenu
      setHeight(contentRef.current.scrollHeight);
    } else {
      // Si fermé, définir la hauteur à 0
      setHeight(0);
    }
  }, [isOpen]); // Dépendance : isOpen

  return (
    <div className="collapse">
      {/* Bouton pour ouvrir/fermer le collapse */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="collapse-button"
      >
        {/* Nom du collapse */}
        <span className="collapse-name">{name}</span>
        {/* Icône de flèche qui tourne quand le collapse est ouvert */}
        <img 
          src={arrowUp} 
          alt="Arrow icon"
          className={`arrow-icon ${isOpen ? "icon-rotate" : ""}`}
        />
      </button>

      {/* Conteneur du contenu avec hauteur animée */}
      <div 
        className="collapse-content" 
        style={{ height: `${height}px` }} // Hauteur dynamique pour l'animation
        ref={contentRef} // Référence pour mesurer la hauteur du contenu
      >
        {/* Contenu interne du collapse */}
        <div className="collapse-inner">
          {elements}
        </div>
      </div>
    </div>
  );
}

export default Collapse;

