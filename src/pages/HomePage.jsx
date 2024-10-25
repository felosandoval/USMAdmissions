import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';
import RegistroPage from './RegistroPage';
import { FaUsers, FaCogs, FaLightbulb } from 'react-icons/fa';

const HomePage = () => {
  return (
    <Router>
      <div className="home-page">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
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
              </>
            } 
          />
          <Route path="/registro" element={<RegistroPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default HomePage;
