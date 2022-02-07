import React, { useState, createContext } from "react";

export const contexto = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);


  function addToCart(producto, cantidad, precio) {
    if (isInCart(producto.id)) {
      const indexItem = cart.findIndex((ele) => ele.item.id === producto.id);
      cart[indexItem].cantidad = cart[indexItem].cantidad + cantidad;
      setCart([...cart]);
    } else {
      setCart([...cart, { item: producto, cantidad, precio }]);
    }
  }

  function deleteItem(id) {
    const updatedCart = cart.filter((element) => element.item.id !== id);
    setCart(updatedCart);
  }

  function isInCart(id) {
    return cart.some((element) => element.item.id === id);
  }

  function clearCart() {
    setCart([]);
  }

  function cantCart() {
    ////////////Array.length////////////
    return cart.map((item) => item.item.price * item.cantidad).length
}

function totalCart() {
    ////////////FUNCIONes Sub Total pantalla////////////
    console.log(cart.map((item) => item.item.price * item.cantidad).reduce((a, b) => a + b));
    ////////////Las 2 son iguales////////////
    return cart.reduce((acum, value) => acum + (value.cantidad * value.item.price), 0)
  }

  return (
    <>
      <contexto.Provider value={{ cart, addToCart, deleteItem, clearCart, totalCart, cantCart }}>
        {children}
      </contexto.Provider>
    </>
  );
}
