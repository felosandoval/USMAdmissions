import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Hook para la navegación

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navega a la página de login
  };

  const handleRegisterClick = () => {
    navigate('/registrer'); // Navega a la página de registro
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <ul>
          <li>
            <Link to="/"> {/* Cambiado a Link para redirigir a la página principal */}
              Inicio
            </Link>
          </li>
          <li>
            <a href="#universidad">Carreras</a>
          </li>
        </ul>
      </nav>
      <div className={`header__buttons ${isMenuOpen ? 'header__buttons--open' : ''}`}>
        {location.pathname !== '/registrer' && (
          <button onClick={handleRegisterClick} className="btn btn--secondary">Registrarse</button>
        )}
        {location.pathname !== '/login' && (
          <button onClick={handleLoginClick} className="btn btn--primary">Iniciar Sesión</button>
        )}
      </div>
      <button className="header__menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
