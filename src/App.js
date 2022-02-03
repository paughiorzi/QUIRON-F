import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContext from "./components/CartContext";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
/* import ListaDeProductosPromesa from "./components/ListaDeProductosPromesa"; */


function App() {
  const arrayDeLink = [
    { id: "1", nombre: "Home", enlace: "/" },
    { id: "2", nombre: "Carrito", enlace: "/cart" },
    { id: "3", nombre: "Merch", enlace: "/merch" },
    { id: "4", nombre: "Servicios", enlace: "/servicios" },
    { id: "5", nombre: "Contacto", enlace: "/contacto" },
  ];
  return (
    <div>
      <CartContext>

      <BrowserRouter>
      {/* /////////// NAVBAR ////////// */}
      <div>
        <NavBar arrayDeLink={arrayDeLink} tamaño={"20px"} />
        </div>


        <Switch>
          {/* /////////// HOME ////////// */}
          <Route exact path="/">
            <ItemListContainer />
            {/* <ListaDeProductosPromesa /> */}
            
          </Route>
          {/* /////////// Producto ////////// */}
          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          {/* /////////// Carrito ////////// */}
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>

        {/* /////////// FOOTER ////////// */}
        <div><Footer/></div>

      </BrowserRouter>

      </CartContext>
    </div>
  );
}

export default App;
