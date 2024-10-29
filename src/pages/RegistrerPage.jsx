import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistrerPage = () => {
  const navigate = useNavigate();
<<<<<<< HEAD

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Redirige a la página después del registro
    navigate('/login');
  };
=======
  const goToLogin = () => navigate('/resumen');
>>>>>>> e2a91ee4734231844e3f5c1aa15dba2ba983402b

  return (
    <div className="registrer-page">
      <div className="card">
        <h2 className="card__title">Registro</h2>
<<<<<<< HEAD
        <form onSubmit={handleSubmit}>
=======
        <form onSubmit={goToLogin}>
>>>>>>> e2a91ee4734231844e3f5c1aa15dba2ba983402b
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
