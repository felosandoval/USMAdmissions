import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaUsers, FaCogs, FaLightbulb } from 'react-icons/fa';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';

import RegistrerPage from './RegistrerPage';
import LoginPage from './LoginPage';

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
          <Route path="/registrer" element={<RegistrerPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/carreras"> <CarrerasPage /> </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default HomePage;
