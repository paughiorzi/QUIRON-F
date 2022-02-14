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
