import React, { useState, useEffect, createContext } from "react";

export const contexto = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  function alertEspacial() {
    alert("un alert desde marte!");
  }

  function addToCart(producto, cantidad) {
    if (isInCart(producto.id)) {
      const indexItem = cart.findIndex((ele) => ele.item.id === producto.id);
      cart[indexItem].cantidad = cart[indexItem].cantidad + cantidad;
      setCart([...cart]);
    } else {
      setCart([...cart, { item: producto, cantidad }]);
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

  return (
    <>
      <contexto.Provider value={{ alertEspacial, cart, addToCart, deleteItem, clearCart }}>
        {children}
      </contexto.Provider>
    </>
  );
}
