import { useState, useContext } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";

export default function ItemDetail({ producto }) {
  const { addToCart } = useContext(contexto);

  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  function onAdd(cantidad) {
    addToCart(producto, cantidad);
    alert(cantidad + " unidad/es agregada/s");
    setMostrarItemCount(false);
  }
  return (
    <>
      <link rel="stylesheet" href="./scss/style.css"></link>
      <div className="funcionaLPQTP">
        {producto.id ? (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
              <Card.Title>{producto.name}</Card.Title>
              <Card.Text>{producto.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Articulo: {producto.id}</ListGroupItem>
              <ListGroupItem>Precio: $ {producto.price}</ListGroupItem>
              <ListGroupItem>Stock disponible: {producto.stock}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              {mostrarItemCount ? (
                <ItemCount tope={producto.stock} onAdd={onAdd} />
              ) : (
                <Button variant="primary" className="botonSecundario">
                  <Link
                    to={"/cart"}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    Terminar mi Compra
                  </Link>
                </Button>
              )}
            </Card.Body>
          </Card>
        ) : (
          <>Loading...</>
        )}
      </div>
    </>
  );
}
