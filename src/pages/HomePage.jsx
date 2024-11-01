import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaUsers, FaCogs, FaLightbulb } from 'react-icons/fa';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';

import RegistrerPage from './RegistrerPage';
import LoginPage from './LoginPage';
import CarrerasPage from './CarrerasPage';
import ResumenPage from './ResumenPage';
import HistorialPage from './HistorialPage';
import FormularioPage from './FormularioPage';


const HomePage = () => {
  return (
    <Router>
      <div className="home-page">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
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
              </>
            } 
          />
          <Route 
            path="/registrer" 
            element={
              <>
                <Header />
                <RegistrerPage />
              </>
            } 
          />
          
          <Route 
            path="/login" 
            element={
              <>
                <Header />
                <LoginPage />
              </>
            } 
          />

          <Route 
            path="/carreras" 
            element={
              <>
                <Header />
                <CarrerasPage />
              </>
            } 
          />

          <Route 
            path="/resumen" 
            element={
              <>
                <Header />
                <ResumenPage />
              </>
            } 
          />

          <Route 
            path="/historial" 
            element={
              <>
                <Header />
                <HistorialPage />
              </>
            } 
          />

          <Route 
            path="/formulario" 
            element={
              <>
                <Header />
                <FormularioPage />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};



export default HomePage;
