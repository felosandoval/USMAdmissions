import React from 'react';
import logo from '../assets/logo.png'; // Asegúrate de tener este archivo en la carpeta assets

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo UTFSM" />
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#universidad">Universidad</a></li>
          <li><a href="#desarrollo">Desarrollo</a></li>
          <li><a href="#investigacion">Investigación</a></li>
          <li><a href="#cultura">Cultura</a></li>
        </ul>
      </nav>
      <div className="header__buttons">
        <button className="btn btn--secondary">Registrarse</button>
        <button className="btn btn--primary">Iniciar Sesión</button>
      </div>
    </header>
  );
};

export default Header;