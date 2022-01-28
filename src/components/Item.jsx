import React, { useState, useEffect } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  CardGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item({ producto }) {
  return (
    <>
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Text>{producto.description}</Card.Text>
            <Card.Text>Precio: {producto.price}</Card.Text>
            <Link to={"/item/"+producto.id}>Ver detalle</Link>
          </Card.Body>  
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            <br />
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}
