import React, { useState, useEffect } from 'react';
import Producto from './Producto';
import { getFirestore } from '../firebase/firebase';

export default function ItemListContainer() {
  const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
          setTimeout(() => {
          const db = getFirestore();
          const itemCollection = db.collection("items")
          itemCollection.get()
          .then((querySnapShot) => {
    
            if (querySnapShot.size === 0) {
              console.log('no hay documentos con en ese query');
              return
            }
    
            console.log('hay documentos');
    
            //console.log(querySnapShot.docs);
    
            setItems(querySnapShot.docs.map((doc)=> {
                return { id: doc.id, ...doc.data() }
            }
            ));
            
          })
          .catch((err)=>{
            console.log(err);
          })

          .finally(() => setLoading(true));

        }, 2000)
      }, [])

    return (
      <>
            {(loading)?
                <>
                   {items.map(item=> <Producto key={item.id} item={item}/>)}
                </>
                :
                <>
                <h2>Cargando...</h2> 
                </>
            }
        </>
    )
}
