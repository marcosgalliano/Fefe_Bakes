// Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ imageUrl, title, description, price, link }) => {
    return (
        <div className="product-card">
            <img src={imageUrl} alt={title} className="product-image" />
            <div className="product-info">
                <h4 className="product-title">{title}</h4>
                <p className="product-description">{description}</p>
                <div className='card-flex'>
                    <p className="product-price">${price}</p>
                    <Link to={link}>
                        <button className="product-button">Ver Producto</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;