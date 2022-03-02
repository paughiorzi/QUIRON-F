import { React, useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";
import carrito from "../assets/img/carrito.png";

export default function NavBar({ arrayDeLink }) {
  const { cantCart } = useContext(contexto);

  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand className="quironF">Quiron Fuerza</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {arrayDeLink.map((link) => {
                  return (
                    <Nav.Link key={link.id} href={link.enlace}>
                      {link.nombre}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
          <div>
            <Link to={"/cart"}>
              <Button variant="primary" className="cantidadEnCarrito">
                {cantCart()}
              </Button>
              <img width={"60px"} src={carrito} alt="carrito de compra" />
            </Link>
          </div>
        </Navbar>
      </div>
    </>
  );
}
