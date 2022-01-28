import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MasMenos from "./MasMenos";

import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function ItemDetail({producto}) {
  const [promesa, setPromesa]=useState([false]);
  return (
    <>
        <div>
            {(producto.id) ?
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.img} />
                    <Card.Body>
                      <Card.Title>{producto.name}</Card.Title>
                      <Card.Text>
                        {producto.description}
                      </Card.Text>
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
                    <MasMenos tope = {producto.stock}/>
                  <br />
                  </Card>
                :
                <>Loading...</>
            }
            {/* <ComponenteQueTenemos stock={producto.stock} id={producto.id}/> */}
        </div>
    </>
);
}