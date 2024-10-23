import oceanBanner from '../assets/ocean.svg';  // Chemin correct vers ton image

function Banner() {
  return (
    <div className="banner">
      <img src={oceanBanner} alt="Bannière Océan" className="banner-image" />
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
