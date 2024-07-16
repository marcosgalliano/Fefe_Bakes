import { Link } from "react-router-dom";
import "./Home.css";
import Card from "../../components/Card/Card";

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
        <img src="" alt="Profile" className="profile-image" />
        <h2 className="profile-name">Josefina Lopez Jallaguier</h2>
      </div>
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
      <div className="products-section">
        <h3>Productos Destacados</h3>
        {products.map((product) => (
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
  );
};

export default Home;
