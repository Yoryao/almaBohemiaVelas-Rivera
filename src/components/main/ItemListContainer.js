import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { getDocs, query, collection, where } from "firebase/firestore";
import "./itemListContainer.css"

export const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();

     useEffect(() => {
       const productosQuery = collection(db, "productos");

       if (categoria) {   
                  const consulta = query(
           productosQuery,
           where("categoria", "==", categoria)
         );
         getDocs(consulta)
           .then(({ docs }) => {
             setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
           })
           .catch((error) => {
             console.log(error);
           });
       } else {
         getDocs(productosQuery)
           .then(({ docs }) => {
             setProductos(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
           })
           .catch((error) => {        
           });
       }
     }, [categoria]);

  return (
    <div id="divSaludo">
      <h1 id="title">{saludo}{categoria}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
