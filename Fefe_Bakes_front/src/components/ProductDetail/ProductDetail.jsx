import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductDetail.css";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const userId = user ? user.id : null;

  const product = products.find((product) => product.id === id);

  useEffect(() => {
    if (userId && product) {
      const fetchFavorites = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/favorites/${userId}`
          );
          const favorites = response.data.favorites;
          const isFav = favorites.some(
            (fav) =>
              fav.item_id === product.id && fav.item_type === product.type
          );
          setIsFavorite(isFav);
        } catch (error) {
          console.error("Error fetching favorites", error);
        }
      };

      fetchFavorites();
    }
  }, [userId, product]);

  const addFavorite = async () => {
    try {
      await axios.post("http://localhost:3001/api/favorites/add", {
        user_id: userId,
        item_id: id,
        item_type: product.type,
      });
      setIsFavorite(true);
    } catch (error) {
      console.error("Error adding favorite", error);
    }
  };

  const removeFavorite = async () => {
    try {
      await axios.delete("http://localhost:3001/api/favorites/remove", {
        data: {
          user_id: userId,
          item_id: id,
          item_type: product.type,
        },
      });
      setIsFavorite(false);
    } catch (error) {
      console.error("Error removing favorite", error);
    }
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite();
    } else {
      addFavorite();
    }
  };

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <div className="image-container">
        <img
          className="img-product"
          src={product.images[0]?.url}
          alt={product.title}
        />
        <div className="icon-div">
          {userId && (
            <ion-icon
              name={isFavorite ? "heart" : "heart-outline"}
              className={`favorite-icon ${isFavorite ? "filled" : ""}`}
              onClick={toggleFavorite}
            ></ion-icon>
          )}
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
