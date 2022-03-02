import React, { useState, useEffect } from "react";
import Producto from "./Producto";
import { getFirestore } from "../firebase/firebase";
import { useFirestoreItem } from "../hooks/useFirestore";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { loading, setLoading } = useFirestoreItem("items");
  useEffect(() => {
    setTimeout(() => {
      const db = getFirestore();
      const itemCollection = db.collection("items");
      itemCollection
        .get()
        .then((querySnapShot) => {
          if (querySnapShot.size === 0) {
            console.log("no hay documentos con en ese query");
            return;
          }
          console.log("hay documentos");

          setItems(
            querySnapShot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }, 2000);
  }, [loading, setLoading]);

  return (
    <>
      {loading ? (
        <>
          <h2>Cargando...</h2>
        </>
      ) : (
        <>
          {items.map((item) => (
            <Producto key={item.id} item={item} />
          ))}
        </>
      )}
    </>
  );
}
