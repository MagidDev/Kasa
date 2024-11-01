import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import montagneBanner from '../assets/montagne.svg'; // Importation de l'image montagne

function About() {
  return (
    <div>
      {/* Réutilisation du composant Banner avec l'image montagne et sans texte */}
      <Banner imageSrc={montagneBanner} altText="Bannière Montagne" bannerClassName="banner-about" hideText={true} />
      
      {/* Collapse pour chaque section avec le texte correspondant */}
      <div className="about-collapse">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          className="about-collapse"
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
          className="about-collapse"
        />
        <Collapse
          title="Service"
          content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          className="about-collapse"
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          className="about-collapse"
        />
      </div>
    </div>
  );
}

export default About;
