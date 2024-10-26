import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <h1>Admisión 2025</h1>
      <h2>Carreras, Vías de ingreso, Programas, Beneficios</h2>
      <Link to="/registrer"> {/* Envolviendo el botón en un Link */}
        <button className="btn btn--large">POSTULA AQUÍ</button>
      </Link>
    </div>
  );
};

export default Banner;
