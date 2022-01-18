import React, { useState } from "react";

export default function MasMenos({tope}){
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
        if (aux >= 0){
            rest = aux - 1;
        }
        setCantidad(rest);
    }

    return(
        <>
        <span onClick={()=>restar()}> - </span>
        {cantidad}
        <span onClick={()=>sumar()}> + </span>
        <br />
        </>
    )
}
