import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetch("http://localhost:5000/api/products", {
        headers: { Authorization: token },
      })
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard Admin</h1>
      <h2>Daftar Produk</h2>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Harga: ${product.price}</p>
          <p>Stok: {product.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default Admin;
