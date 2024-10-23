import logo from '../assets/blacklogo.svg';  // Chemin vers ton logo SVG

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src={logo} alt="Kasa logo" className="logo-footer" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
