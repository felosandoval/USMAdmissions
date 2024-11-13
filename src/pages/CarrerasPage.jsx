import React from 'react';
import CarreraCard from '../components/CarreraCard';

//Se importan todas las imágenes de la carpeta `carreras`
const imagenes = require.context('../assets/carreras', false, /\.(png|jpe?g|svg)$/);


const carreras = [
    {   titulo: "Ingeniería Civil",
        profesional: "Puntaje de corte: 745 puntos",
        duracion: "Duración: 11 semestres",
        lugar: "Lugar: Campus Casa Central Valparaíso",
        
        imagen: imagenes("./ingenieria_civil.jpg")
    },

    {   titulo: "Ingeniería Comercial",
        profesional: "Puntaje de corte: 725 puntos",
        duracion: "Duración: 10 semestres",
        lugar: "Lugar: Campus Casa Central Valparaíso",

        imagen: imagenes("./ingenieria-comercial.jpg")
    },
  
    {   titulo: "Arquitectura",
        profesional: "Puntaje de corte: 728 puntos",
        duracion: "Duración: 11 semestres",
        lugar: "Lugar: Sede Viña del Mar y Sede Concepción",

        imagen: imagenes("./arquitectura.jpg")
    },
  
    {   titulo: "Ingeniería Informática",
        profesional: "Puntaje de corte: 763 puntos",
        duracion: "Duración: 10 semestres",
        lugar: "Lugar: Sede Viña del Mar y Sede Concepción",
      
        imagen: imagenes("./ingeniería_informatica.jpg")
    },
  
    {   titulo: "Licenciatura en Física",
        profesional: "Puntaje de corte: 787 puntos",
        duracion: "Duración: 8 semestres",
        lugar: "Lugar: Campus Casa Central Valparaíso",

        imagen: imagenes("./fisica.jpg")
    },
  
    {   titulo: "Ingeniería Mecánica",
        profesional: "Puntaje de corte: 694 puntos",
        duracion: "Duración: 11 semestres",
        lugar: "Lugar: Sede Concepción",

        imagen: imagenes("./mecanica.jpg")
    },
];

const CarrerasPage = () => {
  return (
    <div className="carreras-page">
      <h1 className="carreras-page__titulo">Nuestras Carreras</h1>
      <div className="carreras-grid">
        {carreras.map((carrera, index) => (
          <CarreraCard key={index} {...carrera} />
        ))}
      </div>
    </div>
  );
};

export default CarrerasPage;