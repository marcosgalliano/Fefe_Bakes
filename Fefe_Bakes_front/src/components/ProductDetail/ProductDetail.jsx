import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [isFavorite, setIsFavorite] = useState(false);

    const product = {
        id,
        name: 'Torta de Chocolate',
        price: '$20.000',
        img: '../../../public/images/card-cake-1.avif',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <div className="image-container">
                <img className='img-product' src={product.img} alt={product.name} />
                <div className='icon-div'>
                    <ion-icon
                        name={isFavorite ? "heart" : "heart-outline"}
                        className={`favorite-icon ${isFavorite ? "filled" : ""}`}
                        onClick={toggleFavorite}
                    ></ion-icon>
                </div>
            </div>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}</p>
            <div className='btn-flex'>
                <button className='btn-receta'>Comprar Receta</button>
                <button className="add-to-cart">Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ProductDetail;
