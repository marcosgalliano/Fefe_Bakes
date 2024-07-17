import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../redux/actions/getAllProducts';
import { setFilters } from '../../redux/actions/filterActions';
import './Catalog.css';

const Catalog = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const filters = useSelector((state) => state.filters);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    console.log("Products in component: ", products);

    const handleFilterChange = (e) => {
        const { name, checked } = e.target;
        dispatch(setFilters({
            ...filters,
            [name]: checked,
        }));
    };

    const filteredProducts = products.filter((product) => {
        if (!filters.Cursos && !filters.Recetarios && !filters.Promociones) {
            return true;
        }
        return filters[product.category];
    });


    return (
        <div className="container">
            <h3>Catálogo</h3>
            <div className="filter">
                <label className="filter-item">
                    Cursos
                    <input
                        type="checkbox"
                        name="Cursos"
                        checked={filters.Cursos}
                        onChange={handleFilterChange}
                    />
                </label>
                <label className="filter-item">
                    Recetarios
                    <input
                        type="checkbox"
                        name="Recetarios"
                        checked={filters.Recetarios}
                        onChange={handleFilterChange}
                    />
                </label>
                <label className="filter-item">
                    Promociones
                    <input
                        type="checkbox"
                        name="Promociones"
                        checked={filters.Promociones}
                        onChange={handleFilterChange}
                    />
                </label>
            </div>
            <hr />
            <div className="products-section">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.img} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h4 className="product-title">{product.name}</h4>
                            <p className="product-description">{product.description}</p>
                            <div className="card-flex">
                                <p className="product-price">{product.price}</p>
                                <Link to={`detalle-producto/${product.id}`} className="product-button">Ver Producto</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
