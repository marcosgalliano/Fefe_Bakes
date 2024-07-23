// Verifica si el usuario es un administrador antes de permitirle acceder a las rutas protegidas
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const user = useSelector((state) => state.user); // Asume que tienes el estado del usuario en Redux

    if (!user || user.role !== 'admin') {
        return <Navigate to="/iniciar-sesion" />;
    }

    return children;
};

export default PrivateRoute;
