import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase/firebase";

export default function ItemDetailContainer({ item, aux }) {
  const [producto, setProducto] = useState({});
  const { itemId } = useParams();
  
  useEffect(() => {


    setTimeout(() => {
      const db = getFirestore();
      const itemCollection = db.collection("items");

      
      ///////////////no filtra el ID///////////////
      
      const miItem = itemCollection.doc('XQ84VshOVz1FvwqqILxe');
      
      /* let items = itemCollection.map(prod => ({ ...prod.data() }));
      let miItem = items.find(prod => prod.id === itemId); */
      /* const miItem = itemCollection.doc(itemCollection.filter((item) => item.id === itemId),[0]); */
      
      ///////////////no filtra el ID///////////////

    miItem.get()    
      .then((doc) => {

        /* console.log(doc.data());
        console.log(doc.id);
        console.log({ id: doc.id, ...doc.data() }); */

        if (!doc.exists) {
          console.log('no existe ese documento');
          return
        }

        console.log('item found');
        setProducto({ id: doc.id, ...doc.data() });

      })
      .catch((err)=>{
        console.log(err);
      })

    }, 2000);
  }, [itemId]);

  return (
    <>
      {itemId}
      <ItemDetail producto={producto} />
      <br />
      <br />
      <Button variant="primary">
        <Link
          to="/merch"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          ir a PRODUCTOS
        </Link>
      </Button>
      <br />
    </>
  );
}
