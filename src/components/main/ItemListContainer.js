import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase"
import { getDocs , query, collection, where} from "firebase/firestore"

export const ItemListContainer = ({ items, saludo }) => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();
  // console.log(id);

  useEffect(() => {

    const productosQuery = collection ( db , "productos")

if (categoria) {

const consulta = query(productosQuery, where ( "categoria" , "==", categoria))


getDocs(consulta)
.then(({ docs }) => {
    setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })));



    console.log("Todo Bien");
    console.log(productosQuery)
})
.catch((error) => {
  console.log(error)
});
}

else {

  getDocs(productosQuery)
  .then(({ docs }) => {
    setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })));



      console.log("Todo Bien");
      console.log(productosQuery)
})
  .catch((error) => {
    console.log(error)
  });



}

       // const promesa = new Promise((res, rej) => {
    //   setTimeout(() => {
    //     if (!categoria) {
    //       res(items);
    //       console.log("no llega al filter");
    //     } else {
    //       console.log("llega al filter que no filter");
    //       res(items.filter((item) => item.categoria == categoria));
    //     }
    //   }, 2000);

    // });

    // promesa
    //   .then((products) => {
    //     setProductos(products);
    //   })
    //   .catch(() => {
    //     console.log("Error en el catch de ItemListContainer");
    //   });
  } , [categoria]);

  return (
    <div>
      <h1>{saludo}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
