import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getPathName = (path) => {
    switch (path) {
      case "/":
        return "Inicio";
      case "/sobre-mi":
        return "Quién Soy";
      case "/contacto":
        return "Contacto";
      case "/catalogo":
        return "Catálogo";
      case "/mis-compras":
        return "Mis Compras";
      case "/mi-perfil":
        return "Mi Perfil";
      case "/favoritos":
        return "Mis Favoritos";
      case "/cart":
        return "Carrito";
      case "/iniciar-sesion":
        return "Iniciar Sesión";
      default:
        return path.replace("/", ""); // Quita el slash del principio
    }
  };

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
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} className="menu-close-icon" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="menu-open-icon" />
          )}
        </div>
      </div>
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <div className="navegation">
          <ul>
            <li>
              <Link to="/" className="link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/sobre-mi" className="link">
                Quién Soy
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="link">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/catalogo" className="link">
                Catálogo
              </Link>
            </li>
          </ul>
        </div>
        <div className="account-section">
          <span className="account-text">Mi cuenta</span>
          <hr className="account-hr" />
        </div>
        <div className="user-info">
          <ul>
            <li>
              <Link to="/mis-compras" className="link">
                Mis Compras
              </Link>
            </li>
            <li>
              <Link to="/mi-perfil" className="link">
                Mi Perfil
              </Link>
            </li>
            <li>
              <Link to="/favoritos" className="link">
                Mis Favoritos
              </Link>
            </li>
            <li>
              <Link to="/cart" className="link">
                Carrito <span className="cart-badge">2</span>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/iniciar-sesion" className="login">
          Iniciar Sesión
        </Link>
      </nav>
    </header>
  );
};

export default Header;
