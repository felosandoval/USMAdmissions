import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/resumen');
  };

  return (
    <div className="login-page">
      <div className="card">
        <h2 className="card__title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn btn--primary">Ingresar</button>
        </form>
        <div className="login-link">
          ¿No tienes una cuenta? <Link to="/registrer">Regístrate</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

