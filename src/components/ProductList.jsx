import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import jersey1 from "../assets/images/jersey1.jpeg";
import jersey2 from "../assets/images/jersey2.jpeg";
import jersey3 from "../assets/images/jersey3.jpeg";
import jersey4 from "../assets/images/jersey4.jpeg";

const products = [
  {
    id: 1,
    name: "Jersey Sepak Bola  ",
    price: 10000000,
    image: jersey1,
  },
  {
    id: 2,
    name: "jersey Futsal",
    price: 5000000,
    image: jersey2,
  },
  {
    id: 3,
    name: "Jersey Voly",
    price: 1000000,
    image: jersey3,
  },
  {
    id: 4,
    name: "Jersey Pencak ",
    price: 800000,
    image: jersey4,
  },
];

const ProductList = () => {
  return (
    <Container className="my-4">
      <h2>Katalog</h2>
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
