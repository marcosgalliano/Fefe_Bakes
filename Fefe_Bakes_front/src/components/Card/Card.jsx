import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { addToCart } from "../../utils/cartUtils";

const Card = ({ imageUrl, title, description, price, link, id, type }) => {
  const user = useSelector((state) => state.user);
  const userId = user ? user.id : null; // Verificar si user existe
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (userId) {
      // Fetch user's favorites to determine if this item is a favorite
      const fetchFavorites = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/favorites/${userId}`
          );
          const favorites = response.data.favorites;
          const isFav = favorites.some(
            (fav) => fav.item_id === id && fav.item_type === type
          );
          setIsFavorite(isFav);
        } catch (error) {
          console.error("Error fetching favorites", error);
        }
      };

      fetchFavorites();
    }
  }, [userId, id, type]);

  const addFavorite = async () => {
    try {
      await axios.post("http://localhost:3001/api/favorites/add", {
        user_id: userId,
        item_id: id,
        item_type: type,
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
          item_type: type,
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

  const handleAddToCart = () => {
    const product = { id, imageUrl, title, description, price, type };
    addToCart(product);
    alert("Producto agregado al carrito");
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-fav-div">
        {userId && (
          <ion-icon
            name={isFavorite ? "heart" : "heart-outline"}
            className={`favorite-icon ${isFavorite ? "filled" : ""}`}
            onClick={toggleFavorite}
          ></ion-icon>
        )}
      </div>
      <div className="product-info">
        <h4 className="product-title">{title}</h4>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <div className="card-flex-catalog">
          <Link to={link}>
            <button className="product-button-see">
            Ver Producto</button>
          </Link>
          <button className="product-button-add" onClick={handleAddToCart}>
            Agregar al carrito 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
