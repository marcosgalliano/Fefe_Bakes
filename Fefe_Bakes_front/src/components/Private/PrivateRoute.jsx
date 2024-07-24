import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = useSelector((state) => state.token);
    return token ? children : <Navigate to="/iniciar-sesion" />;
};

export default PrivateRoute;
