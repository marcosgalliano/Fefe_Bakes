// src/pages/Catalog/Catalog.jsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/actions/getAllProducts';
import { setFilters } from '../../redux/actions/filterActions';
import Card from '../../components/Card/Card';
import './Catalog.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    dispatch(setFilters({ ...filters, [name]: checked }));
  };

  const filteredProducts = products.filter((product) => {
    if (!filters.Cursos && !filters.Recetarios && !filters.Promociones) {
      return true;
    }
    return (
      (filters.Cursos && product.type === "curso") ||
      (filters.Recetarios && product.type === "recetario") ||
      (filters.Promociones && product.type === "promocion")
    );
  });

  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);

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
      <hr className="hr-catalog"/>
      <div className="products-section">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            imageUrl={product.images[0]?.url}
            title={product.title}
            description={product.description}
            price={product.price}
            link={`/detalle-producto/${product.id}`}
            type={product.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
