import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Importa el logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="logo" /> {logo.png}
      </div>
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#universidad">Universidad</a></li>
          <li><a href="#desarrollo">Desarrollo</a></li>
          <li><a href="#investigacion">Investigación</a></li>
          <li><a href="#cultura">Cultura</a></li>
        </ul>
      </nav>
      <div className={`header__buttons ${isMenuOpen ? 'header__buttons--open' : ''}`}>
        <Link to="/registro" className="btn btn--secondary">Registrarse</Link>
        <button className="btn btn--primary">Iniciar Sesión</button>
      </div>
      <button className="header__menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
