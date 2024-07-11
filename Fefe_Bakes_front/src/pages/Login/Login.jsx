
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="https://res.cloudinary.com/dasch1s5i/image/upload/fefeBakesLogo_ieewde.jpg"
          alt="Fefé Bakes"
          className="login-logo"
        />
        <h1>Bienvenido !</h1>
        <p className="subtitle">Por favor ingrese sus datos</p>
        <form className="login-form">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email" className={email ? "filled" : ""}>
              Email
            </label>
          </div>
          <div className="form-group">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password" className={password ? "filled" : ""}>
              Contraseña
            </label>
            <button
              type="button"
              onClick={handlePasswordVisibility}
              className="password-toggle"
            >
              <img
                src={
                  passwordVisible
                    ? "https://res.cloudinary.com/dclvhbrj3/image/upload/v1720458259/IconVisible_dtjgwo.png"
                    : "https://res.cloudinary.com/dclvhbrj3/image/upload/v1720458248/IconOcultar_rxxqem.png"
                }
                alt={passwordVisible ? "Ocultar" : "Mostrar"}
                className="password-toggle-icon"
              />
            </button>
          </div>
          <div className="form-remember">
            <div className="remember-check">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Recordarme</label>
            </div>
            <Link to='/olvide-contraseña'>¿Olvidaste tu contraseña?</Link>
          </div>
          <div className="login-button">
            <button type="submit" className="btn">
              Iniciar sesión
            </button>
          </div>
          <div className="login-medium">
            <p> O </p>
          </div>
          <div className="google-div">
            <button type="button" className="google-sign-in-button">
              Iniciar con Google
            </button>
          </div>
        </form>
        <div className="register">
          <p className="register-text">¿No tienes una cuenta?</p>
          <Link to='/registro'>Registrate acá</Link>
        </div>
      </div>
      <div className="login-right">
        <img
          src="https://res.cloudinary.com/dasch1s5i/image/upload/loginCakeimg_peypuc.jpg"
          className="login-cake-image"
        />
      </div>
    </div>
  );
};

export default Login;
