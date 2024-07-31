import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); // Obtiene el id de la ruta
  const [isFavorite, setIsFavorite] = useState(false);
  const products = useSelector((state) => state.products);

  // Encuentra el producto que coincide con el id de la ruta
  const product = products.find((product) => product.id === id);

  // Si no se encuentra el producto, muestra un mensaje de error
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <div className="image-container">
        <img className="img-product" src={product.images[0]?.url} alt={product.title} />
        <div className="icon-div">
          <ion-icon
            name={isFavorite ? "heart" : "heart-outline"}
            className={`favorite-icon ${isFavorite ? "filled" : ""}`}
            onClick={toggleFavorite}
          ></ion-icon>
        </div>
      </div>
      <p className="description">{product.description}</p>
      <p className="price">${product.price}</p>
      <div className="btn-flex">
        <button className="btn-receta">Comprar Receta</button>
        <button className="add-to-cart">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductDetail;
