import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {logout} from "../../redux/actions/authActions"; // Asegúrate de importar la acción de logout
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    
    const { token } = useSelector((state) => ({
        token: state.token
    }));

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest(".header") && menuOpen) {
            closeMenu();
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [menuOpen]);

    useEffect(() => {
        closeMenu();
    }, [location]);

    const handleLogout = () => {
        dispatch(logout());
        closeMenu();
    };

    const getPathName = (path) => {
        if (path.startsWith("/detalle-producto/")) {
            return "Detalle";
        }
        const paths = {
            "/": "Inicio",
            "/sobre-mi": "Quién Soy",
            "/contacto": "Contacto",
            "/catalogo": "Catálogo",
            "/mis-compras": "Mis Compras",
            "/mi-perfil": "Mi Perfil",
            "/favoritos": "Mis Favoritos",
            "/cart": "Carrito",
            "/iniciar-sesion": "Iniciar Sesión"
        };
        return paths[path] || path.replace("/", "");
    };

    const renderLinks = (links) => {
        return links.map((link) => (
            <li key={link.to}>
                <Link 
                    to={link.to} 
                    className={`link ${location.pathname === link.to ? 'active' : ''}`} 
                    onClick={closeMenu}
                >
                    {link.label}
                </Link>
            </li>
        ));
    };
    
    const mainLinks = [
        { to: "/", label: "Inicio" },
        { to: "/catalogo", label: "Catálogo" },
        { to: "/sobre-mi", label: "Quién Soy" },
        { to: "/contacto", label: "Contacto" }
    ];

    const accountLinks = [
        { to: "/mis-compras", label: "Mis Compras" },
        { to: "/mi-perfil", label: "Mi Perfil" },
        { to: "/favoritos", label: "Mis Favoritos" },
        { to: "/cart", label: "Carrito" }
    ];

    const adminLinks = [
        { to: "/admin", label: "Administrar App" }
    ];

    return (
        <header className="header">
            <div className="header-container">
                <img
                    src="https://res.cloudinary.com/dclvhbrj3/image/upload/v1721152837/logo_fefe_bakescopy_xkxa1b.jpg"
                    alt="Logo"
                    className="logo"
                />
                <div className="menu-icon" onClick={toggleMenu}>
                    <span>{getPathName(location.pathname)}</span>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="menu-icon" />
                </div>
                <nav className="desktop-nav">
                    <ul className="nav-links">{renderLinks(mainLinks)}</ul>
                    <div className="auth-buttons">
                        {token ? (
                            <button className="logout-btn" onClick={handleLogout}>
                                Cerrar Sesión
                            </button>
                        ) : (
                            <>
                                <Link to="/iniciar-sesion" className="login-btn" onClick={closeMenu}>
                                    Iniciar Sesión
                                </Link>
                                <Link to="/registro" className="register-btn" onClick={closeMenu}>
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
            <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
                <div className="navegation">
                    <ul>{renderLinks(mainLinks)}</ul>
                </div>
                <div className="account-section">
                    <span className="account-text">Mi cuenta</span>
                    <hr className="account-hr" />
                </div>
                <div className="user-info">
                    <ul>{renderLinks(accountLinks)}</ul>
                </div>
                <div className="account-section">
                    <span className="account-text">Administracion</span>
                    <hr className="account-hr" />
                </div>
                <div className="user-info">
                    <ul>{renderLinks(adminLinks)}</ul>
                </div>
                {token ? (
                    <button className="logout-btn" onClick={handleLogout}>
                        Cerrar Sesión
                    </button>
                ) : (
                    <>
                        <Link to="/iniciar-sesion" className="login-btn" onClick={closeMenu}>
                            Iniciar Sesión
                        </Link>
                        <Link to="/registro" className="register-btn" onClick={closeMenu}>
                            Registrarse
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
