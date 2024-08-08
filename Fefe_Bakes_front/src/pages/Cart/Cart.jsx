import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartCard from "../../components/CartCard/CartCard";
import { getCart, removeFromCart, clearCart } from "../../utils/cartUtils"; // Importar funciones de ayuda

import style from "./Cart.module.css";

const Cart = () => {
  const mp = new MercadoPago("APP_USR-dafd8025-07ed-41e4-9464-6d399ac136e1", {
    locale: "es-AR",
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getCart()); // Cargar productos del carrito al montar el componente
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setProducts(getCart()); // Actualizar estado después de remover
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );

  const createCheckButton = (pId) => {
    const bricksBuilder = mp.bricks();

    const renderComp = async () => {
      await bricksBuilder.create("wallet", "wallet_container", {
        initialization: {
          preferenceId: pId,
        },
      });
    };

    renderComp();
  };

  const handleCheckout = async () => {
    try {
      const orderData = {
        title: "compra en ecommerce fefe bakes",
        quantity: 1,
        price: Number(totalPrice),
      };

      const response = await fetch(
        "http://localhost:3001/api/payment/create-preference",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      console.log(response);
      
      const preference = await response.json();
      createCheckButton(preference.id);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  return (
    <div className={style.divContainerCart}>
      <div className={style.divTitle}>
        <h1>Mi Carrito</h1>
      </div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className={style.productCard}>
            <CartCard
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              price={product.price}
              link="#"
            />
            <button
              className={style.deleteButton}
              onClick={() => handleRemove(product.id)}
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        ))
      ) : (
        <div className={style.containerFavorites}>
          <div className={style.iconHeart}>
            <ion-icon name="cart-outline"></ion-icon>
          </div>
          <div className={style.contentFavorites}>
            <h3>Aún no hay nada</h3>
            <p>
              Selecciona el botón debajo para Buscar una receta y agregar un
              favorito
            </p>
          </div>
          <Link to="/catalogo" className={style.btnFavoritos}>
            Ver Recetas
          </Link>
        </div>
      )}
      {products.length > 0 && (
        <div className={style.totalSection}>
          <p>Total a pagar: ${totalPrice}</p>
          <button className={style.buyButton} onClick={handleCheckout}>Go to checkout</button>
          <div id="wallet_container"></div>
        </div>
      )}
    </div>
  );
};

export default Cart;