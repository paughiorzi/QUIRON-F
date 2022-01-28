import React, { useEffect, useState } from "react";
  import Item from "./Item";

export default function ItemList({ arrayDeProductos }) {
  
    return (
    <> 
        {arrayDeProductos.map(producto => <Item key={producto.id} producto={producto}/>)}
    </>
  );
}

