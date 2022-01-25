import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemList from "./components/ItemList";
import ListaDeProductosPromesa from "./components/Carrito";

function App() {
  const arrayDeLink = [
    { nombre: "Home", enlace: "/" },
    { nombre: "Carrito", enlace: "/carrito" },
    { nombre: "Merch", enlace: "/merch" },
    { nombre: "Servicios", enlace: "/servicios" },
    { nombre: "Contacto", enlace: "/contacto" },
  ];
  return (
    <div>
      <BrowserRouter>
      {/* /////////// NAVBAR ////////// */}
      <div><NavBar arrayDeLink={arrayDeLink} tamaño={"20px"} /></div>


        <Switch>
          {/* /////////// HOME ////////// */}
          <Route exact path="/">
            <ItemListContainer />
            
          </Route>
          {/* /////////// Producto ////////// */}
          <Route path="/item/:itemId">
            <ItemDetailContainer />
            <ListaDeProductosPromesa />
          </Route>
        </Switch>

        {/* /////////// FOOTER ////////// */}
        <div>FOOTER</div>

      </BrowserRouter>

    </div>
  );
}

export default App;
