import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/LOGO.svg';  // Importation du logo

function Header() {
  const location = useLocation(); // Utiliser useLocation pour obtenir le chemin actuel

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Kasa logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
