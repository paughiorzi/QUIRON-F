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
                <>Loading...</>
            }
        </>
    )
}

/////////////Anterior Funcion - Reemplazada por ListaDeProductosPromesa (borrar))///////////////////////
/* export default function ItemListContainer() {
  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setArrayDeProductos([
        {
          id: '001',
          name: 'Remera Quiron',
          description: 'Remera de algodón talle unico',
          price: '$1500',
          stock: '11',
          img: 'https://sporting.vteximg.com.br/arquivos/ids/187790-1500-1500/ADSFAFDSF.jpg?v=636977754196600000',
        },
        {
          id: '002',
          name: 'Short Quiron',
          description: 'Short de algodón talle unico',
          price: '$2500',
          stock: '8',
          img: 'https://assets.reebok.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5f10e944685f4d929510ad35011224a0_9366/Shorts_estampados_Epic_Lightweight_Negro_GS6581_01_standard.jpg',
        },
        {
          id: '003',
          name: 'Rodilleras ROGUE',
          description: 'Rodilleras rojas',
          price: '$3500',
          stock: '4',
          img: 'https://http2.mlstatic.com/D_NQ_NP_772697-MLA40246937685_122019-O.webp',
        },
        {
          id: '004',
          name: 'Buzo Quiron',
          description: 'Buzo de algodón talle unico',
          price: '$1500',
          stock: '2',
          img: 'http://http2.mlstatic.com/D_932166-MLA45873526957_052021-O.jpg',
        },
      ]);
    }, 2000);
  }, []);

  return (
    <>
      <ItemList arrayDeProductos={arrayDeProductos} />
    </>
  );
}
 */