import React from "react";
import MasMenos from "./MasMenos";

export default function Producto({item}){
    function onAdd(){
        alert (item.name + " " + item.stock);
    }

    return(
        <>PRODUCTOS:
        <p>{item.name}</p>
        <p>{item.stock}</p>
        <div onClick={()=>onAdd()}>AGREGAR</div>
        <MasMenos tope = {item.stock}/>
        </>
    )
}