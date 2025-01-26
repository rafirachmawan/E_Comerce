const Product = ({ product, onAddToCart }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>Harga: ${product.price}</p>
      <p>Stok: {product.stock}</p>
      <button onClick={() => onAddToCart(product)}>Tambah ke Keranjang</button>
    </div>
  );
};

export default Product;
