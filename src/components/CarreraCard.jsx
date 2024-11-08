import React from 'react';

const CarreraCard = ({ titulo, profesional, duracion, lugar, imagen }) => {
  return (
    <div className="carrera-card" style={{ backgroundImage: `url(${imagen})` }}>
      <div className="carrera-card__content">
        <h3 className="carrera-card__titulo">{titulo}</h3>
        <p className="carrera-card__tituloprofesional">{profesional}</p>
        <p className="carrera-card__duracion">{duracion}</p>
        <p className="carrera-card__lugar">{lugar}</p>
      </div>
    </div>
  );
};

export default CarreraCard;