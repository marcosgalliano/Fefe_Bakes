import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Favorites from './pages/Favorites/Favorites';
import Courses from './pages/Courses/Courses';
import Catalog from './pages/Catalog/Catalog';
import ProductDetail from './components/ProductDetail/ProductDetail';
import UserProfile from './pages/UserProfile/UserProfile';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import MainLayout from './components/MainLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/olvide-contraseña" element={<ForgotPassword/>} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detalle-producto/:id" element={<ProductDetail />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/perfil" element={<UserProfile />} />
          <Route path="/mi-perfil" element={<UserProfile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;