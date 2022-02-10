import React from "react";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../firebase/firebase";

export default function ItemDetailContainer({ item, aux }) {
  const [producto, setProducto] = useState({});
  const { itemId } = useParams();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {

    setLoading(true);

    getFirestore()

      .collection("items")
      .doc(itemId)

      .get()
      .then((doc) => {
        setProducto({ id: doc.id, ...doc.data() });
        console.log("hay producto")
      })
      .catch((dataError) => setError(dataError))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="bodyList">
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
        </div>
      )}
    </>
  );
}
