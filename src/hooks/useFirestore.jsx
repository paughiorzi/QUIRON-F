import { useEffect, useState } from "react";
import { getFirestore } from "../firebase/firebase"

export const useFirestoreItem = (nameCollection, itemId) => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    /* setTimeout(() => { */
    getFirestore()

      .collection(nameCollection)
      .doc(itemId)

      .get()
      .then((doc) => {
        setProducto({ id: doc.id, ...doc.data() });
        console.log("hay producto")
      })
      .catch((dataError) => setError(dataError))
      .finally(() => setLoading(false));
    /* }, 2000); */
  }, [nameCollection, itemId]);

  return { producto, setProducto, loading, setLoading, error, setError };
};
