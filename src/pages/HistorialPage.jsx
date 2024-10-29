import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function HistorialPage() {
  const navigate = useNavigate();

  const goToResumen = () => navigate('/resumen');
  const goToPostulacionesHistoricas = () => navigate('/historial');
  const goToPostular = () => navigate('/formulario');
  const goToCerrarSesion = () => navigate('/');

  // Datos para tabla
  const applicationData = [
    { id: '9999001', carrera: 'Ing. Civil', sede: 'Viña del mar', ubicacion: '3 Norte', puntaje: 780 },
    { id: '9999003', carrera: 'Ing. Matemática', sede: 'Concepción', ubicacion: 'Valparaíso', puntaje: 540 },
    { id: '9999002', carrera: 'Ing. Informática', sede: 'Casa Central', ubicacion: '4 Norte', puntaje: 700 },
    { id: '9999004', carrera: 'Lic. Matemática', sede: 'San Joaquín', ubicacion: 'Santiago', puntaje: 980 },
  ];

  return (
    <div className="historial-page">
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
            <h1>Postulaciones Historicas</h1>
          </header>
          <main>
            <table className="application-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Carrera</th>
                  <th>Sede</th>
                  <th>Ubicación</th>
                  <th>Puntaje</th>
                </tr>
              </thead>
              <tbody>
                {applicationData.map((app, index) => (
                  <tr key={app.id}>
                    <td>{app.id}</td>
                    <td>{app.carrera}</td>
                    <td>{app.sede}</td>
                    <td>{app.ubicacion}</td>
                    <td>{app.puntaje}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
  );
}