import { useState, useEffect } from "react";
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

  const getPathName = (path) => {
    if (path.startsWith("/detalle-producto/")) {
      return "Detalle";
    }
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
              <Link to="/" className="link" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/sobre-mi" className="link" onClick={closeMenu}>
                Quién Soy
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="link" onClick={closeMenu}>
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/catalogo" className="link" onClick={closeMenu}>
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
              <Link to="/mis-compras" className="link" onClick={closeMenu}>
                Mis Compras
              </Link>
            </li>
            <li>
              <Link to="/mi-perfil" className="link" onClick={closeMenu}>
                Mi Perfil
              </Link>
            </li>
            <li>
              <Link to="/favoritos" className="link" onClick={closeMenu}>
                Mis Favoritos
              </Link>
            </li>
            <li>
              <Link to="/cart" className="link" onClick={closeMenu}>
                Carrito <span className="cart-badge">2</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="account-section">
          <span className="account-text">Administracion</span>
          <hr className="account-hr" />
        </div>
        <div className="user-info">
          <ul>
            <li>
              <Link to="/mis-compras" className="link" onClick={closeMenu}>
                Administrar App
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/iniciar-sesion" className="login" onClick={closeMenu}>
          Iniciar Sesión
        </Link>
      </nav>
    </header>
  );
};

export default Header;
