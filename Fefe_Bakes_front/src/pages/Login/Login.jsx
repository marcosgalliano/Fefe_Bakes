import { useState } from 'react';
import './Login.css';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <img src="../../../public/images/fefeBakesLogo.png" alt="Fefé Bakes" className="login-logo" />
                <h1>Bienvenido !</h1>
                <p className='subtitle'>Por favor ingrese sus datos</p>
                <form className="login-form">
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            placeholder=' '
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="email" className={email ? 'filled' : ''}>Email</label>
                    </div>
                    <div className="form-group">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="password"
                            name="password"
                            value={password}
                            placeholder=' '
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password" className={password ? 'filled' : ''}>Contraseña</label>
                        <button type="button" onClick={handlePasswordVisibility} className="password-toggle">
                            <img
                                src={passwordVisible ? '../../../public/images/IconVisible.png' : '../../../public/images/IconOcultar.png'}
                                alt={passwordVisible ? 'Ocultar' : 'Mostrar'}
                                className="password-toggle-icon"
                            />
                        </button>
                    </div>
                    <div className="form-remember">
                        <div className='remember-check'>
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">Recordarme</label>
                        </div>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className='login-button'>
                        <button type="submit" className="btn">Iniciar sesión</button>
                    </div>
                    <div className='login-medium'>
                        <p> O </p>
                    </div>
                    <div className='google-div'>
                        <button type="button" className="google-sign-in-button">
                            Iniciar con Google
                        </button>
                    </div>
                </form>
                <div className='register'>
                    <p className="register-text">
                        ¿No tienes una cuenta?
                    </p>
                    <a href="#">Registrate acá</a>
                </div>
            </div>
            <div className="login-right">
                <img src="../../../public/images/loginCakeimg.avif" alt="Cake" className="login-cake-image" />
            </div>
        </div>
    );
}

export default Login;
