import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, adminOnly = false }) => {
    const { token, user } = useSelector((state) => state);

    if (!token) {
        return <Navigate to="/iniciar-sesion" />;
    }

    if (adminOnly && user.role !== 'admin') {
        return <Navigate to="/acceso-denegado" />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
    adminOnly: PropTypes.bool,
};

export default PrivateRoute;
