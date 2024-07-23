
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h1>Panel de Administración</h1>
            <ul>
                <li><Link to="/admin/cursos">Administrar Cursos</Link></li>
                <li><Link to="/admin/recetarios">Administrar Recetarios</Link></li>
                <li><Link to="/admin/promociones">Administrar Promociones</Link></li>
            </ul>
        </div>
    );
};

export default AdminDashboard;
