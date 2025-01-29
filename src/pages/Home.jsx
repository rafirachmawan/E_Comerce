import { useEffect, useState } from "react";
import CustomCarousel from "../components/Carousel";
import CustomNavbar from "../components/Navbar";
import Product from "../components/Product";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    fetch("http://localhost:5000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message));
  };

  return (
    <div>
      <CustomNavbar />
      <CustomCarousel />
      <ProductList />
      <Footer />

      {/* backend */}
      {/* <h1>Produk Tersedia</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
      <h2>Keranjang</h2>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
        </div>
      ))}
      <button onClick={handleCheckout}>Checkout</button> */}
    </div>
  );
};

export default Home;
