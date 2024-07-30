import './Favorites.css';
import { Link } from 'react-router-dom';

const Favorites = () => {

    return (
        <div className="container-favorites">
            <div className='icon-heart'>
                <ion-icon name="heart-outline"></ion-icon>
            </div>
            <div className='content-favorites'>
                <h3> Aún no hay nada </h3>
                <p> Selecciona el botón debajo
                    para Buscar una receta y agregar un favorito </p>
            </div>
            <Link to="/catalogo" className='btn-favoritos'> Ver Recetas </Link>
        </div>
    )
}

export default Favorites;