import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = ( {items , saludo}) => {
  const [detail, setDetail] = useState({});

  let {id} = useParams();

  const getItem = () => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(items.find((item) => item.id == id));
      }, 2000);
    }, []);

    promesa
      .then((seleccionado) => {
        console.log("Funca el detalle");
        setDetail(seleccionado);
      })
      .catch(() => {
        console.log("no funca el Detalle");
         });
  };

  useEffect(() => getItem(), [id]);
 
  return (
    <div>
      <h1> {saludo} </h1>
      <ItemDetail detail={detail}></ItemDetail>
    </div>
  );
  
};

export default ItemDetailContainer;
