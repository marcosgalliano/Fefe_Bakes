import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Favorites from "./pages/Favorites/Favorites";
import Courses from "./pages/Courses/Courses";
import Catalog from "./pages/Catalog/Catalog";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import UserProfile from "./pages/UserProfile/UserProfile";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import MainLayout from "./components/MainLayout";
import QuienSoy from "./pages/QuienSoy/QuienSoy";
import MisCompras from "./pages/MisCompras/MisCompras";
import Forbidden from "./pages/Forbidden/Forbidden";
import { getAllProducts } from "./redux/actions/getAllProducts";

// Admin
import AdminDashboard from "./pages/Admin/AdminDashboard";
import PrivateRoute from "./components/Private/PrivateRoute";
import ManageCourses from "./pages/Admin/ManageCourses";
import { ManagePromotions } from "./pages/Admin/ManagePromotions";
import { ManageRecipes } from "./pages/Admin/ManageRecipes";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setId } from "./redux/actions/authActions";
import CreateCourse from "./pages/Admin/CreateCourse";


const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user || !user.id) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.id) {
          dispatch(setId(parsedUser.id));
        }
      }
    }
  }, [user, dispatch]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/olvide-contraseña" element={<ForgotPassword />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detalle-producto/:id" element={<ProductDetail />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/perfil" element={<UserProfile />} />
          <Route path="/sobre-mi" element={<QuienSoy />} />
          <Route path="/mis-compras" element={<MisCompras />} />
          <Route path="/mi-perfil" element={<UserProfile />} />
          <Route path="/acceso-denegado" element={<Forbidden />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        {/* Rutas protegidas */}
        <Route
          exact path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/cursos"
          element={
            <PrivateRoute>
              <ManageCourses />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/cursos/crear"
          element={
            <PrivateRoute>
              <CreateCourse />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/recetarios"
          element={
            <PrivateRoute>
              <ManageRecipes />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/promociones"
          element={
            <PrivateRoute>
              <ManagePromotions />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;