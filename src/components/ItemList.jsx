import React, { useEffect, useState } from "react";
import {
    Card,
    ListGroup,
    ListGroupItem,
    Button,
    CardGroup,
  } from "react-bootstrap";
  import Item from "./Item";

export default function ItemList({ arrayDeProductos }) {
  
    return (
    <> 
        {arrayDeProductos.map(producto => <Item  producto={producto}/>)}
    </>
  );
}

