import React from 'react';
import { Link } from 'react-router-dom';

const RegistrerPage = () => {
  return (
    <div className="registrer-page">
      <div className="card">
        <h2 className="card__title">Registro</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirmar contraseña</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit" className="btn btn--primary">Registrarse</button>
        </form>
        <div className="login-link">
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrerPage;