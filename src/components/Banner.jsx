function Banner({ imageSrc, altText, hideText = false }) {
  return (
    <div className="banner">
      <img src={imageSrc} alt={altText} className="banner-image" />
      {!hideText && <h1 className="banner-text">Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

export default Banner;
