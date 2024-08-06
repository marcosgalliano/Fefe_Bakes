import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./Home.css";

const Home = () => {
  const products = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dasch1s5i/image/upload/CakeLogin_zoqgnb.jpg",
      title: "Torta de Chocolate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      price: 20000,
      link: "/detalle-producto/1",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dasch1s5i/image/upload/CakeLogin_zoqgnb.jpg",
      title: "Marquise",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      price: 20000,
      link: "/detalle-producto/2",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dasch1s5i/image/upload/CakeLogin_zoqgnb.jpg",
      title: "Torta Oreo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      price: 20000,
      link: "/detalle-producto/3",
    },
  ];

  return (
    <div className="home">
      <div className="profile-section">
        <img
          src="https://res.cloudinary.com/dclvhbrj3/image/upload/v1721150707/Captura_de_pantalla_2024-06-28_164804_puveyl.png"
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-links">
          <Link className="logo-instagram" to="https://www.instagram.com/fefe.bakes/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></Link>
          <Link className="logo-mail" to="/contacto"><ion-icon name="mail-outline"></ion-icon>
          </Link>
        </div>
        <h2 className="profile-name">Josefina Lopez Jallaguier</h2>
      </div>
      <div className="content-wrapper">
        <div className="about-section">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="vertical-line"></div>
        <div className="products-section-home">
          <h3>Productos Destacados</h3>
          <div className="product-row">
            {products.slice(0, 2).map((product) => (
              <Card
                key={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
                price={product.price}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
