import { useState } from 'react';
import arrow from '../assets/arrow_back_.svg';

function Collapse({ title, content, className }) { // Ajouter la prop className
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className}`}> {/* Appliquer la classe ici */}
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img
          src={arrow}
          alt="arrow"
          className={`arrow-icon ${isOpen ? 'open' : ''}`}
        />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
