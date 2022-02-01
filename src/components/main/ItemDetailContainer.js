import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./itemDetailContainer.css"

export const ItemDetailContainer = ({ saludo }) => {

  const [producto, setProducto] = useState({});
  let { id } = useParams();

  useEffect(
    () => {
      const productosQuery = collection(db, "productos");
      const consulta = doc(productosQuery, id);

      getDoc(consulta)
        .then((resultado) => {
          setProducto({ id: id, ...resultado.data() });
         })
        .catch((error) => {
          console.log(error);
        });
    }, [id] );

  return (
    <div>
        <h1 id="title">{saludo}</h1>
        <ItemDetail producto={producto}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
