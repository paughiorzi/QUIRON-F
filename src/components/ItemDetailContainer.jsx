import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  CardGroup,
} from "react-bootstrap";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer({ item, aux }) {
  const {itemId} = useParams();

  const [producto, setProducto] = useState({});
  
  useEffect(()=>{
    setTimeout(()=>{
      
    let arrayDeProductos = [
      {
          id:'001',
          name: 'Remera Quiron',
          description: 'Remera de algodón talle unico',
          price: '$1500',
          stock: '11',
          img:"https://sporting.vteximg.com.br/arquivos/ids/187790-1500-1500/ADSFAFDSF.jpg?v=636977754196600000",
      },
      {
          id:'002',
          name: 'Short Quiron',
          description: 'Short de algodón talle unico',
          price: '$2500',
          stock: '008',
          img:"https://assets.reebok.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5f10e944685f4d929510ad35011224a0_9366/Shorts_estampados_Epic_Lightweight_Negro_GS6581_01_standard.jpg",
      },
      {
          id:'003',
          name: 'Rodilleras ROGUE',
          description: 'Rodilleras rojas',
          price: '$3500',
          stock: '4',
          img:"https://http2.mlstatic.com/D_NQ_NP_772697-MLA40246937685_122019-O.webp",
      },
      {
          id:'004',
          name: 'Buzo Quiron',
          description: 'Buzo de algodón talle unico',
          price: '$1500',
          stock: '2',
      img:"http://http2.mlstatic.com/D_932166-MLA45873526957_052021-O.jpg"}];
      
      arrayDeProductos = arrayDeProductos.filter(item => item.id === itemId);

      let myProducto = arrayDeProductos[0];

      setProducto(myProducto);  
      
    }, 2000)
  }, [itemId])
  
  return (
    <>
    {itemId}
      <ItemDetail producto={producto}/>
      <Link to={"/item/003"}>ir al item 3</Link>
        {/* <Card>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>Precio:{item.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
        <br/>
        <Button href={<ItemDetail></ItemDetail>} variant="primary">Comprar</Button>{' '}
          </Card.Footer>

        </Card>  */}
    </>
  );
}
