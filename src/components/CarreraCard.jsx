import React from 'react';

const CarreraCard = ({ titulo, duracion, imagen }) => {
  return (
    <div className="carrera-card" style={{ backgroundImage: `url(${imagen})` }}>
      <div className="carrera-card__content">
        <h3 className="carrera-card__titulo">{titulo}</h3>
        <p className="carrera-card__duracion">{duracion}</p>
      </div>
    </div>
  );
};

export default CarreraCard;