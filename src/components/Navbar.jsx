import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img
            src="https://via.placeholder.com/100x30?text=Logo"
            alt="Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggle Button untuk Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Search Bar */}
          <Form className="d-flex mx-auto" style={{ width: "50%" }}>
            <FormControl
              type="search"
              placeholder="Cari barang..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>

          {/* Menu Kanan */}
          <Nav className="ms-auto">
            <Nav.Link href="#cart">
              <FontAwesomeIcon icon={faShoppingCart} /> Keranjang
            </Nav.Link>
            <Nav.Link href="#login">
              <FontAwesomeIcon icon={faUser} /> Masuk
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
