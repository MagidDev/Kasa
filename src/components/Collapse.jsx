import { useState } from 'react';
import arrow from '../assets/arrow_back_.svg';  // Assurez-vous que le chemin de l'image est correct

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h3>{title}</h3>
        {/* Assurez-vous que la balise <img> est bien fermée */}
        <img
          src={arrow}
          alt="arrow"
          className={`arrow-icon ${isOpen ? 'open' : ''}`}
          onClick={toggleCollapse}
        />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
