import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';

const HideRoutes = ['/resumen', '/historial', '/formulario'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/registrer');
  };

  const handleLogoutClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      {!HideRoutes.includes(location.pathname) && (
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/carreras">Carreras</Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="header__buttons">
        {HideRoutes.includes(location.pathname) ? (
          <button onClick={handleLogoutClick} className="btn btn--secondary">
            Cerrar Sesión
          </button>
        ) : (
          <>
            {location.pathname !== '/registrer' && (
              <button onClick={handleRegisterClick} className="btn btn--secondary">
                Registrarse
              </button>
            )}
            {location.pathname !== '/login' && (
              <button onClick={handleLoginClick} className="btn btn--primary">
                Iniciar Sesión
              </button>
            )}
          </>
        )}
      </div>

      <button className="header__menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
