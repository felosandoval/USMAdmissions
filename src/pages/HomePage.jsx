import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';
import { FaUsers, FaCogs, FaLightbulb } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Banner />
      <div className="cards-container">
        <Card 
          icon={<FaUsers />}
          title="Variedad de carreras"
          subtitle="Gran parrilla de ofertas académicas"
        />
        <Card 
          icon={<FaCogs />}
          title="Alto nivel de empleabilidad"
          subtitle="New design from LoganCee Architect"
        />
        <Card 
          icon={<FaLightbulb />}
          title="Líder en Ingeniería"
          subtitle="Según ranking US Army"
        />
      </div>
    </div>
  );
};

export default HomePage;