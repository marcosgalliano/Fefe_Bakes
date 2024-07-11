import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import Login from "../pages/Login/Login";
import { Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Link to="/iniciar-sesion">
        <button>Iniciar Sesión</button>
      </Link>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
