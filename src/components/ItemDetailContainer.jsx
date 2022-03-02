import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useFirestoreItem } from "../hooks/useFirestore";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const { producto, loading } = useFirestoreItem("items", itemId);

  return (
    <>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="bodyList">
          <ItemDetail producto={producto} />
          <br />
          <Button variant="primary" className="botonSecundario">
            <Link
              to="/merch"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Ir a Productos
            </Link>
          </Button>
          <br />
        </div>
      )}
    </>
  );
}
