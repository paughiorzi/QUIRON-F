import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Producto({ item, aux }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>Precio: $ {item.price}</Card.Text>
          <Link to={"/item/" + item.id}>Ver detalle</Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
          <br />
        </Card.Footer>
      </Card>
    </>
  );
}
