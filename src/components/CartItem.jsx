import React, { useContext } from 'react';
import { contexto } from './CartContext';
import { Card, Button } from "react-bootstrap";

export default function CartItem({ producto }){

  const { deleteItem } = useContext(contexto);

  return (
        <div>
        <Card>
          <Card.Body>
            <Card.Title>{producto.item.name}</Card.Title>
            <Card.Text>{producto.item.description}</Card.Text>
            <Card.Text>Precio: {producto.item.price}</Card.Text>
            <Card.Text>Cantidad: {producto.cantidad}</Card.Text>
          </Card.Body>  
        </Card>
        <br/>
        <Button variant="primary" onClick={() => deleteItem(producto.item.id)}>Borrar</Button>
      </div>  
  )
};