import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function ResumenPage() {
  const navigate = useNavigate();

  const goToResumen = () => navigate('/resumen');
  const goToPostulacionesHistoricas = () => navigate('/historial');
  const goToPostular = () => navigate('/formulario');
  const goToCerrarSesion = () => navigate('/');

  return (
    <div className="formulario-page">
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
            <h1>Formulario de Admisión</h1>
          </header>
            <main>
                <p>En esta página se mostrarán los datos del formulario</p>
            </main>

            </div>
      </div>
    </div>
  );
}
