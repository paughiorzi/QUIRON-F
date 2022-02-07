import { React, useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";

export default function NavBar({ arrayDeLink }) {
  const { cantCart } = useContext(contexto)
  
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Quiron Fuerza</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {arrayDeLink.map((link) => {
                  return <Nav.Link key={link.id} href={link.enlace}>{link.nombre}</Nav.Link>;
                })}
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
          <div>
            <Link to={"/cart"}>
            <Button variant="primary">{cantCart()}</Button>
            <img width={"60px"} src={"https://us.123rf.com/450wm/blankstock/blankstock1811/blankstock181100930/112885717-icono-de-l%C3%ADnea-de-servicio-de-entrega-signo-de-carrito-de-compras-compra-express-online-s%C3%ADmbolo-de-l.jpg?ver=6"} alt="carrito de compra" />
            </Link>
          </div>
        </Navbar>
      </div>
    </>
  );
}
