import React, { useState } from "react";
import Producto from "./Producto";

export default function ListaDeProductos() {
    const [ArrayDeProductos, setArrayDeProductos] = useState([
        {name: 'Remera Quiron', stock: 11},
        {name: 'Short Quiron', stock: 8},
        {name: 'Rodilleras Quiron', stock: 4},
        {name: 'Buzo Quiron', stock: 2},
    ]);
    return(
        <>
        {ArrayDeProductos.map(item=> <Producto item={item}/>)}
        </>
    )
};