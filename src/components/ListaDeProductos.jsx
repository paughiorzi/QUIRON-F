import React, { useEffect, useState } from "react";
import Producto from "./Producto";

export default function ListaDeProductosPromesa() {
    const [promesa, setPromesa]=useState([false]);
    const [ArrayDeProductos, setArrayDeProductos] = useState([]);
    
    const productosEnStock = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve ([
                {
                    id:1,
                    name: 'Remera Quiron',
                    description: 'Remera de algodón talle unico',
                    price: '$1500',
                    stock: 11,
                    img:"https://sporting.vteximg.com.br/arquivos/ids/187790-1500-1500/ADSFAFDSF.jpg?v=636977754196600000",
                },
                {
                    id:2,
                    name: 'Short Quiron',
                    description: 'Short de algodón talle unico',
                    price: '$2500',
                    stock: 8,
                    img:"https://assets.reebok.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5f10e944685f4d929510ad35011224a0_9366/Shorts_estampados_Epic_Lightweight_Negro_GS6581_01_standard.jpg",
                },
                {
                    id:3,
                    name: 'Rodilleras ROGUE',
                    description: 'Rodilleras rojas',
                    price: '$3500',
                    stock: 4,
                    img:"https://http2.mlstatic.com/D_NQ_NP_772697-MLA40246937685_122019-O.webp",
                },
                {
                    id:4,
                    name: 'Buzo Quiron',
                    description: 'Buzo de algodón talle unico',
                    price: '$1500',
                    stock: 2,
                img:"http://http2.mlstatic.com/D_932166-MLA45873526957_052021-O.jpg"},])
        }, 2000)
    });

    useEffect(() => {
        productosEnStock
            .then(res => {
                setPromesa(true);
                setArrayDeProductos(res)
            })
            .catch(err => {
                console.log(err);
            });

    })
    return (
        <>
            {(promesa)?
                <>
                   {ArrayDeProductos.map(item=> <Producto item={item}/>)}
                </>
                :
                <>Loading...</>
            }
        </>
    )
}