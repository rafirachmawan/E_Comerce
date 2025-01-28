import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 10000000,
    image: "https://via.placeholder.com/200x200?text=Laptop",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 5000000,
    image: "https://via.placeholder.com/200x200?text=Smartphone",
  },
  {
    id: 3,
    name: "Headphone",
    price: 1000000,
    image: "https://via.placeholder.com/200x200?text=Headphone",
  },
  {
    id: 4,
    name: "Keyboard",
    price: 800000,
    image: "https://via.placeholder.com/200x200?text=Keyboard",
  },
];

const ProductList = () => {
  return (
    <Container className="my-4">
      <h2>Daftar Product</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Rp {product.price.toLocaleString()}</Card.Text>
                <Button variant="primary">Beli</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
