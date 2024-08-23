import { useState } from 'react';
import './collapse.scss';


function Collapse({ name, elements }) {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className="collapse">
     
      <button onClick={() => setIsOpen(!isOpen)}>
        {name}
      </button>

      {isOpen && <div className="collapse-content">{elements}</div>}
    </div>
  );
}

export default Collapse;
