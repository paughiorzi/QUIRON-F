import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function Producto({item, aux}){

    return(
        <>PRODUCTO:
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Articulo:{item.id}</ListGroupItem>
            <ListGroupItem>Precio:{item.price}</ListGroupItem>
            <ListGroupItem>Stock disponible:{item.stock}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>        
        </>
    )
}