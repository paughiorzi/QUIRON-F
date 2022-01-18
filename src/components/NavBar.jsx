import React from "react";
import CartWidget from '../components/assets/CartWidget';
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"

export default function NavBar({arrayDeLink}) {
  return (
    <>
    <Navbar bg="light" expand="lg">
    <img src={CartWidget.img1}/>
      <Container>
        <Navbar.Brand href="#home">Quiron Fuerza</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {arrayDeLink.map(link => {
              return <Nav.Link href={link.enlace}>{link.nombre}</Nav.Link>
            }
              )}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>)
}
