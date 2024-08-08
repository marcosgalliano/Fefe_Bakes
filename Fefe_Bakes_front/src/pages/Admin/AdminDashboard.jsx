import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Admin.css';

const AdminDashboard = () => {
    return (
        <> 
        <Header />
        <div className='container-admin'>
            <h1>Panel de Administración</h1>
            <ul>
                <li><Link className='btn-admin' to="/admin/cursos">Administrar Cursos</Link></li>
                <li><Link className='btn-admin' to="/admin/recetarios">Administrar Recetarios</Link></li>
                <li><Link className='btn-admin' to="/admin/promociones">Administrar Promociones</Link></li>
            </ul>
        </div>
        </>
    );
};

export default AdminDashboard;
