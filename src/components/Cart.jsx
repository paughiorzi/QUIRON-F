import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

export default function Cart() {
  const { cart, clearCart, totalCart } = useContext(contexto);

  return (
    <>
      {cart.length === 0 ? (
        <div>
          <p>CARRITO VACIO</p>
          <Link to="/">Ir a Comprar!</Link>
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
        {`Total: $ ${totalCart()}`}
      </div>
    </>
  );
}
