import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = ( {items , saludo}) => {
  const [producto, setProducto] = useState({});

  let {id} = useParams();

  const getItem = () => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(items.find((item) => item.id == id));
      }, 2);
    }, []);

    promesa
      .then((seleccionado) => {
        console.log("Funca el detalle");
        setProducto(seleccionado);
      })
      .catch(() => {
        console.log("no funca el Detalle");
         });
  };

  useEffect(() => getItem(), [id]);
 
  return (
    <div>
      <h1> {saludo} </h1>
      <ItemDetail producto={producto}></ItemDetail>
    </div>
  );
  
};

export default ItemDetailContainer;
