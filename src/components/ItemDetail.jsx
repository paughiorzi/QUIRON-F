import { useState } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail({ producto }) {
  const [mostrarItemCount, setMostrarItemCount] = useState(true);
  function onAdd(cantidad) {
    alert("quiero agragar " + cantidad);
    setMostrarItemCount(false);
  }
  return (
    <>
      <div>
        {producto.id ? (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
              <Card.Title>{producto.name}</Card.Title>
              <Card.Text>{producto.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Articulo: {producto.id}</ListGroupItem>
              <ListGroupItem>Precio: {producto.price}</ListGroupItem>
              <ListGroupItem>Stock disponible: {producto.stock}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              {/* <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
          </Card>
        ) : (
          <>Loading...</>
        )}
      </div>
      {
        (mostrarItemCount)?
          <ItemCount tope={producto.stock} onAdd={onAdd} />
        :
          <Link to={"/Cart"}>ir al CARRITO</Link>
    
      }
    </>
  );
}
