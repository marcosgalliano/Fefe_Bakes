import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [message, setMessage] = useState('');

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden');
            return;
        }
        if (password.length < 8 || confirmPassword.length < 8 ) {
            setMessage('La contraseña debe tener como mínimo 8 caracteres');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/password/reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token, newPassword: password })
            });

            const data = await response.json();
            if (data.success) {
                setMessage('Contraseña restablecida correctamente');
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('Error al restablecer la contraseña');
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password">
                <img className='logo' src='../../../public/images/fefeBakesLogo.png' alt='Logo Fefe Bakes'></img>
                <h1>Restablecer Contraseña</h1>
                <p> Completa los campos para reestablecer tu contraseña</p>
                <form className="forgot-password-form" onSubmit={handleSubmit}>
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
                        <label htmlFor="password" className={password ? 'filled' : ''}>Nueva Contraseña</label>
                        <button type="button" onClick={handlePasswordVisibility} className="password-toggle">
                            <img
                                src={passwordVisible ? '../../../public/images/IconVisible.png' : '../../../public/images/IconOcultar.png'}
                                alt={passwordVisible ? 'Ocultar' : 'Mostrar'}
                                className="password-toggle-icon"
                            />
                        </button>
                    </div>
                    <div className="form-group">
                        <input
                            type={passwordVisible ? "text" : "password"}
                            id="confirm-password"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder=' '
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="confirm-password" className={confirmPassword ? 'filled' : ''}>Confirmar Contraseña</label>
                        <button type="button" onClick={handlePasswordVisibility} className="password-toggle">
                            <img
                                src={passwordVisible ? '../../../public/images/IconVisible.png' : '../../../public/images/IconOcultar.png'}
                                alt={passwordVisible ? 'Ocultar' : 'Mostrar'}
                                className="password-toggle-icon"
                            />
                        </button>
                    </div>
                    <div className='forgot-password-button'>
                        <button type="submit" className="btn">Restablecer Contraseña</button>
                    </div>
                </form>
                {message && <p className="message">{message}</p>}
                <div>
                <p> O </p>
                <Link className='link-a-inicio' to='/'>Volver al Inicio</Link>
                </div>
                
            </div>
        </div>
    );
}

export default ForgotPassword;
