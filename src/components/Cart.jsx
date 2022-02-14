import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";
import CartItem from "./CartItem";
import { Button, Form, Row, Col } from "react-bootstrap";

export default function Cart() {
  const {
    cart,
    clearCart,
    totalCart,
    onNameChange,
    name,
    onEmailChange,
    email,
    onNumberChange,
    numero,
    onSubmit,
  } = useContext(contexto);

  return (
    <>
      {cart.length === 0 ? (
        <div>
          <h1>CARRITO VACIO</h1>
          <Button variant="primary">
            <Link
              to="/merch"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Ir a Comprar!
            </Link>
          </Button>
        </div>
      ) : (
        <div>
          {cart.map((element) => (
            <CartItem key={element.item.id} producto={element} />
          ))}
          <br />
          <Button variant="danger" onClick={() => clearCart()}>
            Limpiar Carrito
          </Button>
        </div>
      )}
      <div>
        <br />
        <Form>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Martin Lopez"
                onChange={(evt) => onNameChange(evt)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="martin@gmail.com"
                onChange={(evt) => onEmailChange(evt)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              placeholder="+54 011 31586647"
              onChange={(evt) => onNumberChange(evt)}
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

          <Button
            variant="primary"
            type="submit"
            disabled={!(name !== "" && email !== "" && numero !== null)}
            onClick={(evt) => onSubmit(evt)}
          >
            Enviar order de compra
          </Button>
        </Form>

        {`Total: $ ${totalCart()}`}
      </div>
    </>
  );
}
