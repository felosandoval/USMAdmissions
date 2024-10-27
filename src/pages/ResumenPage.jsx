import React from 'react'
import '../stylesheets/ResumenPage.scss'

export default function ResumenPage() {
  return (
    <div className="resumen-page">
      <div className="logo-container">
        <img src="/logo-universidad.svg" alt="Logo Universidad" className="logo" />
      </div>
      <div className="content-wrapper">
        <aside className="sidebar">
          <div className="user-info">
            <svg className="avatar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <div className="user-details">
              <h2>Felipe Sandoval</h2>
              <p>felipesandoval@usm.cl</p>
            </div>
          </div>
          <nav>
            <a href="#" className="active">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Resumen
            </a>
            <a href="#">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Postulaciones históricas
            </a>
            <a href="#">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Postular
            </a>
          </nav>
          <div className="logout">
            <a href="#">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Cerrar Sesión
            </a>
          </div>
        </aside>

        <div className="main-content">
          <header>
            <h1>Resumen</h1>
          </header>
          <main>
            <div className="application-cards">
              <div className="card">
                <div className="card-header">
                  <img src="/placeholder.svg" alt="University Logo" width="50" height="50" />
                  <div className="card-title">
                    <h2>Ing. Civil (CC)</h2>
                    <p>Estado: Revision de Documentos</p>
                    <p>Fecha Postulacion: 18/09/2024</p>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '60%'}}></div>
                </div>
                <p className="progress-text">Progreso de Postulacion 60%</p>
              </div>

              <div className="card">
                <div className="card-header">
                  <img src="/placeholder.svg" alt="University Logo" width="50" height="50" />
                  <div className="card-title">
                    <h2>Ing. Civil Industrial (SJ)</h2>
                    <p>Estado: RECHAZADO</p>
                    <p>Fecha Postulacion: 17/09/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}