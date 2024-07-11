import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <img src="../../../public/images/fefeBakesLogo.png" alt="Logo" className="logo" />
                <div className="menu-icon" onClick={toggleMenu}>
                    <span>Inicio</span>
                    {menuOpen ? (
                        <FontAwesomeIcon icon={faTimes} className="menu-close-icon" />
                    ) : (
                        <FontAwesomeIcon icon={faBars} className="menu-open-icon" />
                    )}
                </div>
            </div>
            <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
                <div className='navegation'>
                    <ul>
                        <li><Link to='' className="link">Inicio</Link></li>
                        <li><Link to='' className="link">Quién Soy</Link></li>
                        <li><Link to='' className="link">Contacto</Link></li>
                        <li><Link to='' className="link">Catálogo</Link></li>
                    </ul>
                </div>
                <div className='account-section'>
                    <span className="account-text">Mi cuenta</span>
                    <hr className="account-hr" />
                </div>
                <div className='user-info'>
                    <ul>
                        <li><Link to='' className="link">Mis Compras</Link></li>
                        <li><Link to='' className="link">Mi Perfil</Link></li>
                        <li><Link to='' className="link">Mis Favoritos</Link></li>
                        <li>
                            <Link to='' className="link">Carrito <span className="cart-badge">2</span></Link>
                        </li>
                    </ul>
                </div>
                <Link to='/iniciar-sesion' className="login">Iniciar Sesión</Link>
            </nav>
        </header>
    );
};

export default Header;
