import logements from '../data/logements.json';
import Card from '../components/Card';
import Banner from '../components/Banner';
import oceanBanner from '../assets/ocean.svg'; // Import de l'image spécifique pour la bannière

function Home() {
  return (
    <div>
      {/* Appel du composant Banner avec les props */}
      <Banner
        imageSrc={oceanBanner} // Image de la bannière
        altText="Bannière Océan" // Texte alternatif pour l'accessibilité
        bannerText="Chez vous, partout et ailleurs" // Texte affiché sur la bannière
        className="dark-banner" // Classe pour ajouter l'effet sombre si nécessaire
      />
      <div className="cards-container">
        {/* Affichage des cards pour chaque logement */}
        {logements.map((logement) => (
          <Card key={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
