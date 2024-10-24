import logements from '../data/logements.json';
import { useParams, Navigate } from 'react-router-dom';  // Importer Navigate pour la redirection
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import starFull from '../assets/star_ok.svg';  // Étoile colorée
import starEmpty from '../assets/star.svg';     // Étoile grise

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  // Si l'ID ne correspond à aucun logement, rediriger vers la page 404
  if (!logement) {
    return <Navigate to="/404" />;  // Utilisation de Navigate pour redirection
  }

  // Fonction pour afficher les étoiles
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? starFull : starEmpty}  // Étoile pleine ou vide selon le rating
          alt="star"
          className="star-icon"
        />
      );
    }
    return stars;
  };

  return (
    <div className="logement-page">
      <Slideshow pictures={logement.pictures} />

      <div className="logement-info">
        {/* Partie gauche avec le titre, la localisation et les tags */}
        <div className="logement-details">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Partie droite avec la photo et le nom de l'hôte */}
        <div className="logement-host">
          <div className="host-info">
            <p className="host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt="host"
              className="host-picture"
              style={{ borderRadius: '50%', width: '64px', height: '64px' }}
            />
          </div>
          {/* Affichage des étoiles */}
          <div className="logement-rating">
            {renderStars(logement.rating)}
          </div>
        </div>
      </div>

      {/* Collapse pour la description et les équipements */}
      <div className="logement-collapses">
        <Collapse
          title="Description"
          content={logement.description}
        />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Logement;
