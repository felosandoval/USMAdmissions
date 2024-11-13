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
                    <p>Estado: Revision de Documentos</p>
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

              <div className="card">
                <div className="card-header">
                  <img src={logo_escudo} alt="Logo_escudo" className="logo_escudo" />
                  <div className="card-title">
                    <h2>Ing. Comercial (CC)</h2>
                    <p>Estado: Aprobado</p>
                    <p>Fecha Postulacion: 15/09/2024</p>
                    <p>Numero de Postulacion: 8754</p>
                    <p>Fecha de Resultados: 25/09/2024</p>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '100%'}}></div>
                </div>
                <p className="progress-text">Progreso de Postulacion 100%</p>
              </div>

              <div className="card">
                <div className="card-header">
                  <img src={logo_escudo} alt="Logo_escudo" className="logo_escudo" />
                  <div className="card-title">
                    <h2>Arquitectura (CC)</h2>
                    <p>Estado: En Proceso</p>
                    <p>Fecha Postulacion: 20/09/2024</p>
                    <p>Numero de Postulacion: 9102</p>
                    <p>Fecha de Resultados: 05/10/2024</p>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '30%'}}></div>
                </div>
                <p className="progress-text">Progreso de Postulacion 30%</p>
              </div>

              <div className="card">
                <div className="card-header">
                  <img src={logo_escudo} alt="Logo_escudo" className="logo_escudo" />
                  <div className="card-title">
                    <h2>Lic. Fisica (CC)</h2>
                    <p>Estado: Pendiente</p>
                    <p>Fecha Postulacion: 22/09/2024</p>
                    <p>Numero de Postulacion: 10567</p>
                    <p>Fecha de Resultados: 10/10/2024</p>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '10%'}}></div>
                </div>
                <p className="progress-text">Progreso de Postulacion 10%</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}