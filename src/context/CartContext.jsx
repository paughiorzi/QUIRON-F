import React, { useState, createContext } from "react";
import { getFirestore } from "../firebase/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import { useFirestoreItem } from "../hooks/useFirestore";

export const contexto = createContext();

export default function CartContext({ children }) {
  const { setLoading, setError } = useFirestoreItem("items");
  const db = getFirestore();
  const [cart, setCart] = useState([]);
  const orders = db.collection("orders");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [orderId, setOrderId] = useState("");

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
    return cart.map((item) => item.item.price * item.cantidad).length;
  }

  function totalCart() {
    /*console.log(cart.map((item) => item.item.price * item.cantidad).reduce((a, b) => a + b));

    console.log(cart.reduce((acum, value) => acum + value.cantidad * value.item.price,[null]));
    ////////////  Las 2 son iguales  //////////// */
    return cart.reduce(
      (acum, value) => acum + value.cantidad * value.item.price,
      [null]
    );
  }

  function onNameChange(evt) {
    setName(evt.target.value);
  }
  function onEmailChange(evt) {
    setEmail(evt.target.value);
  }
  function onNumberChange(evt) {
    setEmail(evt.target.value);
  }

  function onSubmit() {
    document.addEventListener("click", function (event) {
      event.preventDefault();
    });
    console.log(
      `Your name is ${name} your email is ${email} you phone number ${numero} and you have to pay $ ${totalCart()}}`
    );

    const newOrder = {
      buyer: name,
      email: email,
      phone: numero,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalCart(),
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id); //success
      })
      .catch((err) => {
        setError(err); //error
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <contexto.Provider
        value={{
          cart,
          addToCart,
          deleteItem,
          clearCart,
          totalCart,
          cantCart,
          onNameChange,
          name,
          setName,
          onEmailChange,
          email,
          setEmail,
          onNumberChange,
          numero,
          setNumero,
          onSubmit,
        }}
      >
        {children}
      </contexto.Provider>
    </>
  );
}
