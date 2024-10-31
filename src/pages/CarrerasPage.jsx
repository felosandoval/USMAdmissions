import React from 'react';
import CarreraCard from '../components/CarreraCard';

//Se importan todas las imágenes de la carpeta `carreras`
const imagenes = require.context('../assets/carreras', false, /\.(png|jpe?g|svg)$/);


const carreras = [
    {   titulo: "Ingeniería Civil",
        duracion: "6 años",
        imagen: imagenes("./ingenieria_civil.jpg")
    },

    {   titulo: "Ingeniería Comercial",
        duracion: "5 años",
        imagen: imagenes("./ingenieria-comercial.jpg")
    },
  
    {   titulo: "Arquitectura",
        duracion: "6 años",
        imagen: imagenes("./arquitectura.jpg")
    },
  
    {   titulo: "Ingeniería Informática",
        duracion: "5 años",
        imagen: imagenes("./ingeniería_informatica.jpg")
    },
  
    {   titulo: "Licenciatura en Física",
        duracion: "4 años",
        imagen: imagenes("./fisica.jpg")
    },
  
    {   titulo: "Ingeniería Mecánica",
        duracion: "5 años",
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