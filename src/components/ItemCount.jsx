import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

export default function ItemCount({ tope, onAdd }) {
  const [cantidad, setCantidad] = useState(0);
  let aux = cantidad;

  function sumar() {
    if (aux < tope) {
      aux = aux + 1;
    }
    setCantidad(aux);
  }
  let rest = 0;
  function restar() {
    if (aux > 0) {
      rest = aux - 1;
    }
    setCantidad(rest);
  }

  return (
    <>
      Cuantos productos desea llevar?
      <br />
      <ButtonGroup aria-label="Basic example" className="contador">
        <Button variant="dark" onClick={() => restar()}>
          -
        </Button>
        <Button variant="light">{cantidad}</Button>
        <Button variant="dark" onClick={() => sumar()}>
          +
        </Button>
      </ButtonGroup>
      <ButtonGroup className="contador">
        <Button variant="primary" onClick={() => onAdd(cantidad)}>
          AGREGAR
        </Button>
      </ButtonGroup>
    </>
  );
}
