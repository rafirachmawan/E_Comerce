import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-primary text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p>
              &copy; {new Date().getFullYear()} Toko Jersey. All rights
              reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p>Follow us on:</p>
            <a href="#" className="text-light me-3">
              Facebook
            </a>
            <a href="#" className="text-light me-3">
              Instagram
            </a>
            <a href="#" className="text-light">
              Twitter
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
