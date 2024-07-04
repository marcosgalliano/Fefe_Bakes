import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-left">
                <img src="../../../public/images/fefeBakesLogo.png" alt="Fefé Bakes" className="login-logo" />
                <h1>Bienvenido !</h1>
                <p className='subtitle'>Por favor ingrese sus datos</p>
                <form className="login-form">
                    <div className="form-group">
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" name="password" required />
                        <label htmlFor="password">Contraseña</label>
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
