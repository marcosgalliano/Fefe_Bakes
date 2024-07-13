import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="profile-section">
                <img src="" alt="Profile" className="profile-image" />
                <h2 className="profile-name">Josefina Lopez Jallaguier</h2>
            </div>
            <div className="about-section">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="products-section">
                <h3>Productos Destacados</h3>
                <div className="product-card">
                    <img src="https://res.cloudinary.com/dasch1s5i/image/upload/CakeLogin_zoqgnb.jpg" alt="Torta de Chocolate" className="product-image" />
                    <div className="product-info">
                        <h4 className="product-title">Torta de Chocolate</h4>
                        <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <div className='card-flex'>
                            <p className="product-price">$20.000</p>
                            <Link to={`/detalle-producto/1`}>
                                <button className="product-button">Ver Producto</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <img src="https://res.cloudinary.com/dasch1s5i/image/upload/CakeLogin_zoqgnb.jpg" alt="Torta de Chocolate" className="product-image" />
                    <div className="product-info">
                        <h4 className="product-title">Marquise</h4>
                        <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <div className='card-flex'>
                            <p className="product-price">$20.000</p>
                            <button className="product-button">Ver Producto</button>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <img src="https://res.cloudinary.com/dasch1s5i/image/upload/CakeLogin_zoqgnb.jpg" alt="Torta de Chocolate" className="product-image" />
                    <div className="product-info">
                        <h4 className="product-title">Torta Oreo</h4>
                        <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <div className='card-flex'>
                            <p className="product-price">$20.000</p>
                            <Link to='detalle-producto:id' className="product-button">Ver Producto</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
