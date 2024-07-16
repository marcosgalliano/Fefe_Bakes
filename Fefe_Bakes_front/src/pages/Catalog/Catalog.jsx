import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';

const productsData = [
    {
        id: 1,
        name: 'Torta Oreo',
        category: 'Cursos',
        price: '$20.000',
        img: '../../../public/images/card-cake-1.avif',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
        id: 2,
        name: 'Recetario Básico',
        category: 'Recetarios',
        price: '$10.000',
        img: 'https://res.cloudinary.com/dasch1s5i/image/upload/course-img_fg7ajh.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
        id: 3,
        name: 'Promoción Especial',
        category: 'Promociones',
        price: '$15.000',
        img: 'https://res.cloudinary.com/dasch1s5i/image/upload/recetario-img_h8bixc.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
];

const Catalog = () => {

    const [filters, setFilters] = useState({
        Cursos: false,
        Recetarios: false,
        Promociones: false,
    });

    const handleFilterChange = (e) => {
        const { name, checked } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: checked,
        }));
    };

    const filteredProducts = productsData.filter((product) => {
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
