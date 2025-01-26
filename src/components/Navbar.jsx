import React from "react";
import logo from "../assets/images/logo.png";
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
      <Container fluid>
        {/* Gunakan grid system untuk membagi layout */}
        <div className="row w-100 align-items-center">
          {/* Kolom untuk Logo */}
          <div className="col-3">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                alt="Logo"
                className="d-inline-block align-top"
                style={{ width: "80px", height: "auto" }} // Atur ukuran logo
              />
            </Navbar.Brand>
          </div>

          {/* Kolom untuk Search Bar */}
          <div className="col-6">
            <Form className="d-flex justify-content-center">
              <FormControl
                type="search"
                placeholder="Cari barang..."
                className="me-2"
                aria-label="Search"
                style={{ width: "100%" }}
              />
              <Button variant="outline-success">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
          </div>

          {/* Kolom untuk Menu Kanan */}
          <div className="col-3">
            <Nav className="justify-content-end">
              <Nav.Link href="#cart">
                <FontAwesomeIcon icon={faShoppingCart} /> Keranjang
              </Nav.Link>
              <Nav.Link href="#login">
                <FontAwesomeIcon icon={faUser} /> Masuk
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
