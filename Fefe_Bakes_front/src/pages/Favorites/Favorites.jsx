import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "../../components/Card/Card";
import "./Favorites.css";

const Favorites = () => {
  const user = useSelector((state) => state.user);
  const userId = user ? user.id : null;
  const products = useSelector((state) => state.products);
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    if (userId) {
      // Fetch user's favorites
      const fetchFavorites = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/favorites/${userId}`
          );
          const favoriteItemIds = response.data.favorites.map(
            (fav) => fav.item_id
          );
          setFavoriteIds(favoriteItemIds);
        } catch (error) {
          console.error("Error fetching favorites", error);
        }
      };

      fetchFavorites();
    }
  }, [userId]);

  const favoriteProducts = products.filter((product) =>
    favoriteIds.includes(product.id)
  );

  return (
    <div className="container-favorites">
      <div className="icon-heart">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="content-favorites">
        {favoriteProducts.length === 0 ? (
          <>
            <h3>Aún no hay nada</h3>
            <p className="p-favorites">
              Selecciona el botón debajo para buscar una receta o curso y agregar un
              favorito
            </p>
            <Link to="/catalogo" className="btn-favoritos">
              Ver Catálogo
            </Link>
          </>
        ) : (
          <div className="favorites-grid">
            {favoriteProducts.map((product) => (
              <Card
                key={product.id}
                imageUrl={product.images[0]?.url}
                title={product.title}
                description={product.description}
                price={product.price}
                link={`/detalle-producto/${product.id}`}
                // type={product.type}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
