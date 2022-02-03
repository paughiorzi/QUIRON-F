import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "./CartContext";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";


export default function Cart(){

    const { cart, clearCart } = useContext(contexto);

  return (
    <>
      {cart.length === 0 ?
        <div>
          <p>CARRITO VACIO</p>
          <Link to='/'>Ir a Comprar!</Link>
        </div>
        :
        <div>
          {cart.map(element => <CartItem key={element.item.id} producto={element} />)}
          <br/>
          <Button variant="primary" onClick={() => clearCart()}>Limpiar Carrito</Button>
        </div>
      }
    </>
  )
}