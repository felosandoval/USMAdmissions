import React from 'react';

const Card = ({ icon, title, subtitle }) => {
  return (
    <div className="card">
      <div className="card__icon">{icon}</div>
      <h3 className="card__title">{title}</h3>
      <p className="card__subtitle">{subtitle}</p>
    </div>
  );
};

export default Card;