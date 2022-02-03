import React, { useState, useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { contexto } from "./CartContext";

export default function ItemCount({tope, onAdd}){
    const { alertEspacial } = useContext(contexto);

    const [cantidad, setCantidad] = useState(0);
    let aux = cantidad;

    function sumar(){
            if (aux < tope){
            aux = aux +1;
        }
        setCantidad(aux);
    }
    let rest = 0;
    function restar(){
        if (aux > 0){
            rest = aux - 1;
        }
        setCantidad(rest);
    }

    return(
        <>
        Cuantos productos desea llevar?
        <br />
        <ButtonGroup aria-label="Basic example">
          <Button variant="danger" onClick={()=>restar()}>-</Button>
          <Button variant="light">{cantidad}</Button>
          <Button variant="success" onClick={()=>sumar()}>+</Button>
        </ButtonGroup>
        <Button variant="primary" onClick={()=> onAdd(cantidad)}>AGREGAR</Button>
        <Button variant="primary" onClick={() => alertEspacial()}>Hacer el alert</Button>
        
        </>
    )
}
