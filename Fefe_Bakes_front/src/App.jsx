import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Favorites from './pages/Favorites/Favorites';
import Courses from './pages/Courses/Courses';
import Catalog from './pages/Catalog/Catalog';
import UserProfile from './pages/UserProfile/UserProfile';
import Cart from './pages/Cart/Cart';
import MainLayout from './components/MainLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/registrarse" element={<Register />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;