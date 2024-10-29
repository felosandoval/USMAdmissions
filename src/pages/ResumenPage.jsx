import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo_escudo from '../assets/logo_escudo.png';
import Sidebar from '../components/Sidebar';

export default function ResumenPage() {
  const navigate = useNavigate();
  const goToResumen = () => navigate('/resumen');
  const goToPostulacionesHistoricas = () => navigate('/historial');
  const goToPostular = () => navigate('/formulario');

  return (
    <div className="resumen-page">
      <div className="content-wrapper">
        <div>
          <Sidebar
            userName={"felipe"}
            userEmail={"user@Email.cl"}
            goToResumen={goToResumen}
            goToPostulacionesHistoricas={goToPostulacionesHistoricas}
            goToPostular={goToPostular}
          />
        </div>

        <div className="main-content">
          <header>
            <h1>Resumen</h1>
          </header>
          <main>
            <div className="application-cards">
              <div className="card">
                <div className="card-header">
                  <img src={logo_escudo} alt="Logo_escudo" className="logo_escudo" />
                  <div className="card-title">
                    <h2>Ing. Civil (CC)</h2>
                    <p> Estado: Revision de Documentos</p>
                    <p>Fecha Postulacion: 18/09/2024</p>
                    <p>Numero de Postulacion: 17080</p>
                    <p>Fecha de Resultados: 30/09/2024</p>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '60%'}}></div>
                </div>
                <p className="progress-text">Progreso de Postulacion 60%</p>
              </div>

              <div className="card">
                <div className="card-header">
                  <img src={logo_escudo} alt="Logo_escudo" className="logo_escudo" />
                  <div className="card-title">
                    <h2>Ing. Civil Industrial (SJ)</h2>
                    <p>Estado: RECHAZADO</p>
                    <p>Fecha Postulacion: 17/09/2024</p>
                    <p>Numero de Postulacion: 5030</p>
                    <p>Fecha de Resultados: 18/09/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
