import logements from '../data/logements.json';
import Card from '../components/Card';
import Banner from '../components/Banner';

function Home() {
  return (
    <div>
      <Banner />
      <div className="cards-container">
        {logements.map((logement) => (
          <Card key={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
