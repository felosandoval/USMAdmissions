import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ProgressBar from '../components/Progressbar';

export default function ResumenPage() {
  const navigate = useNavigate();

  const [formStep, setFormStep] = useState(1); // Controla la sección visible del formulario
  const [formData, setFormData] = useState({
    primerNombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    genero: '',
    fechaNacimiento: '',
    nivelEstudiantil: '',
    direccion: '',
    correoElectronico: '',
    telefono: '+569',
    nacionalidad: '',
    nombreColegio: '',
    regionColegio: '',
    comunaColegio: '',
    carrera: '',
    sede: '',
    promedioNem: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setFormStep(2); // Avanza a la segunda sección del formulario
  };

  const handleBack = (e) => {
    e.preventDefault();
    setFormStep(1); // Vuelve a la primera sección del formulario
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true); // Muestra el mensaje de éxito

    setTimeout(() => {
      setShowSuccessMessage(false); // Oculta el mensaje de éxito
      navigate('/resumen'); // Redirige a la página de resumen después de 4 segundos
    }, 4000);
  };

  const regions = ["Región Metropolitana", "Valparaíso", "Biobío", "Araucanía"];
  const communes = {
    "Región Metropolitana": ["Santiago", "Providencia", "Las Condes"],
    "Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué"],
    "Biobío": ["Concepción", "Talcahuano", "Chillán"],
    "Araucanía": ["Temuco", "Villarrica", "Pucón"]
  };
  const carreras = ["Ingeniería Civil", "Ingeniería en Informática", "Ingeniería Mecánica", "Ingeniería Electrónica"];
  const sedes = ["Casa Central Valparaíso", "Campus San Joaquín", "Campus Vitacura", "Campus Concepción"];

  return (
    <div className="formulario-page">
      <div className="content-wrapper">
        <Sidebar
          userName={"felipe"}
          userEmail={"user@Email.cl"}
          goToResumen={() => navigate('/resumen')}
          goToPostulacionesHistoricas={() => navigate('/historial')}
          goToPostular={() => navigate('/formulario')}
        />

        <div className="main-content">
          <header>
            <h1>Formulario de Admisión</h1>
          </header>
          <main>
            <ProgressBar currentStep={formStep} /> {/* Barra de estado arriba del formulario */}
            
            {formStep === 1 && (
              <form className="admission-form" onSubmit={handleContinue}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="primerNombre">Primer Nombre</label>
                    <input
                      type="text"
                      id="primerNombre"
                      name="primerNombre"
                      value={formData.primerNombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                    <input
                      type="text"
                      id="apellidoPaterno"
                      name="apellidoPaterno"
                      value={formData.apellidoPaterno}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apellidoMaterno">Apellido Materno</label>
                    <input
                      type="text"
                      id="apellidoMaterno"
                      name="apellidoMaterno"
                      value={formData.apellidoMaterno}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="genero">Género</label>
                    <select
                      id="genero"
                      name="genero"
                      value={formData.genero}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione</option>
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                    <input
                      type="date"
                      id="fechaNacimiento"
                      name="fechaNacimiento"
                      value={formData.fechaNacimiento}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nivelEstudiantil">Nivel Estudiantil</label>
                    <select
                      id="nivelEstudiantil"
                      name="nivelEstudiantil"
                      value={formData.nivelEstudiantil}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione</option>
                      <option value="4to medio">4to Medio</option>
                      <option value="3ero medio">3ero Medio</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="correoElectronico">Correo Electrónico</label>
                    <input
                      type="email"
                      id="correoElectronico"
                      name="correoElectronico"
                      value={formData.correoElectronico}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nacionalidad">Nacionalidad</label>
                    <input
                      type="text"
                      id="nacionalidad"
                      name="nacionalidad"
                      value={formData.nacionalidad}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row-single">
                  <div className="form-group">
                    <label htmlFor="direccion">Dirección Residencial</label>
                    <textarea
                      id="direccion"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      rows="3"
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="submit-button">Continuar</button>
              </form>
            )}

            {showSuccessMessage && (
              <div className="success-message">
                ¡Envío exitoso! Redirigiendo a la página de resumen...
              </div>
              )}
            
            {formStep === 2 && (
              <form className="admission-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombreColegio">Nombre de Colegio</label>
                    <input
                      type="text"
                      id="nombreColegio"
                      name="nombreColegio"
                      value={formData.nombreColegio}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="regionColegio">Región de Colegio</label>
                    <select
                      id="regionColegio"
                      name="regionColegio"
                      value={formData.regionColegio}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una Región</option>
                      {regions.map((region) => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="comunaColegio">Comuna de Colegio</label>
                    <select
                      id="comunaColegio"
                      name="comunaColegio"
                      value={formData.comunaColegio}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una Comuna</option>
                      {communes[formData.regionColegio]?.map((comuna) => (
                        <option key={comuna} value={comuna}>{comuna}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="carrera">Carrera</label>
                    <select
                      id="carrera"
                      name="carrera"
                      value={formData.carrera}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una Carrera</option>
                      {carreras.map((carrera) => (
                        <option key={carrera} value={carrera}>{carrera}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="sede">Sede</label>
                    <select
                      id="sede"
                      name="sede"
                      value={formData.sede}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una Sede</option>
                      {sedes.map((sede) => (
                        <option key={sede} value={sede}>{sede}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="promedioNem">Promedio NEM</label>
                    <input
                      type="number"
                      id="promedioNem"
                      name="promedioNem"
                      value={formData.promedioNem}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="button-group">
                  <button onClick={handleBack} className="back-button">Volver</button>
                    <button type="submit" className="submit-button">Enviar</button>
                    </div>
              </form>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
