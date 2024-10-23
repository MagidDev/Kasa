import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.svg';  // Importation du logo

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Kasa logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
