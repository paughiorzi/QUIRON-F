import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ListaDeProductosPromesa from "./components/Carrito";

function App() {
  const arrayDeLink = [
    { id: "1", nombre: "Home", enlace: "/" },
    { id: "2", nombre: "Carrito", enlace: "/carrito" },
    { id: "3", nombre: "Merch", enlace: "/merch" },
    { id: "4", nombre: "Servicios", enlace: "/servicios" },
    { id: "5", nombre: "Contacto", enlace: "/contacto" },
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
            {/* <ListaDeProductosPromesa /> */}
            
          </Route>
          {/* /////////// Producto ////////// */}
          <Route path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
        </Switch>

        {/* /////////// FOOTER ////////// */}
        <div>FOOTER</div>

      </BrowserRouter>

    </div>
  );
}

export default App;
