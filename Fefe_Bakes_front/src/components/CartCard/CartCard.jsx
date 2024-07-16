import React from "react";
import { Link } from "react-router-dom";
import style from "./CartCard.module.css";

const CartCard = ({ imageUrl, title, description, price, link }) => {
  return (
    <div className={style.productCard}>
      <img src={imageUrl} alt={title} className={style.productImage} />
      <div className={style.productInfo}>
        <h4 className={style.productTitle}>{title}</h4>
        <p className={style.productDescription}>{description}</p>
        <div className={style.cardFlex}>
          <p className={style.productPrice}>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
