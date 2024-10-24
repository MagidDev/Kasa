import { useState } from 'react';
import leftArrow from '../assets/left_arrow.svg';
import rightArrow from '../assets/right_arrow.svg';

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="slideshow-container">
      {/* Affiche l'image actuelle */}
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image" />

      {/* Si plus d'une image, afficher les flèches */}
      {pictures.length > 1 && (
        <>
          <img src={leftArrow} alt="Précédente" className="arrow arrow-left" onClick={goToPrevious} />
          <img src={rightArrow} alt="Suivante" className="arrow arrow-right" onClick={goToNext} />
        </>
      )}

      {/* Afficher la numérotation */}
      <div className="slideshow-counter">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
}

export default Slideshow;
