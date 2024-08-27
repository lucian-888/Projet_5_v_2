import { useState } from 'react'
import './collapse.scss'
import arrowUp from '../assets/arrow_up.png'


function Collapse({ name, elements }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button onClick={() => setIsOpen(!isOpen)} className="collapse-button">
      <span className="collapse-name">{name}</span>
        <img 
          src={arrowUp} 
          alt="Arrow icon"
          
          className={`arrow-icon ${isOpen ? "icon-rotate" : ""}`}
        />
      </button>

      {isOpen && <div className="collapse-content">{elements}</div>}
    </div>
  );
}

export default Collapse;
