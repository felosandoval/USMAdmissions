import React from 'react';
import CarreraCard from '../components/CarreraCard';

//Se importan todas las imágenes de la carpeta `carreras`
const imagenes = require.context('../assets/carreras', false, /\.(png|jpe?g|svg)$/);


const carreras = [
    {   titulo: "Ingeniería Civil",
        profesional: "Título Profesional: Ingeniero Civil o Ingeniera Civil",
        duracion: "Duración de los estudios: 6 años",
        lugar: "Lugar: Campus Casa Central Valparaíso",
        
        imagen: imagenes("./ingenieria_civil.jpg")
    },

    {   titulo: "Ingeniería Comercial",
        profesional: "Título Profesional: Ingeniero Comercial",
        duracion: "Duración de los estudios: 5 años",
        lugar: "Lugar: Campus Casa Central Valparaíso",

        imagen: imagenes("./ingenieria-comercial.jpg")
    },
  
    {   titulo: "Arquitectura",
        profesional: "Título Profesional: Arquitecto o Arquitecta",
        duracion: "Duración de los estudios: 6 años",
        lugar: "Lugar: Sede Viña del Mar y Sede Concepción",

        imagen: imagenes("./arquitectura.jpg")
    },
  
    {   titulo: "Ingeniería Informática",
        profesional: "Título Profesional: Ingeniero Informático",
        duracion: "Duración de los estudios: 6 años",
        lugar: "Lugar: Sede Viña del Mar y Sede Concepción",
      
        imagen: imagenes("./ingeniería_informatica.jpg")
    },
  
    {   titulo: "Licenciatura en Física",
        profesional: "Título Profesional: Licenciado en Física",
        duracion: "Duración de los estudios: 4 años",
        lugar: "Lugar: Campus Casa Central Valparaíso",

        imagen: imagenes("./fisica.jpg")
    },
  
    {   titulo: "Ingeniería Mecánica",
        profesional: "Título Profesional: Ingeniero Mecánico",
        duracion: "Duración de los estudios: 4 años",
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