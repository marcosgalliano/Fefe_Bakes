import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/authActions";
import "./Register.css";

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authError = useSelector((state) => state.auth.authError);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        dispatch(register(name, email, password))
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                setError('Error al registrar. Inténtalo de nuevo.');
            });
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <img src="../../../public/images/fefeBakesLogo.png" alt="Fefé Bakes" className="login-logo" />
                <h1>Bienvenido !</h1>
                <p className='subtitle'>Por favor ingrese sus datos</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            placeholder=' '
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label htmlFor="name" className={name ? 'filled' : ''}>Nombre Completo</label>
                    </div>
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
                    {authError && <div className="error-message">{authError}</div>}
                    {error && <div className="error-message">{error}</div>}
                    <div className="form-remember">
                        <div className='remember-check'>
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">Recordarme</label>
                        </div>
                        <Link to='/olvide-contraseña'>¿Olvidaste tu contraseña?</Link>
                    </div>
                    <div className='login-button'>
                        <button type="submit" className="btn">Registrarse</button>
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
                    <p className='register-text'>¿No tienes una cuenta?</p>
                    <Link to='/login'>Inicia sesión</Link>
                </div>
            </div>
            <div className="login-right">
                <img src="https://res.cloudinary.com/dasch1s5i/image/upload/loginCakeimg_peypuc.jpg" className="login-cake-image" />
            </div>
        </div>
    );
};

export default Register;
