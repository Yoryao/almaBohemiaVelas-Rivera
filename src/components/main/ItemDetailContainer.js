import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = ( {items , saludo}) => {
  const [detail, setDetail] = useState({});

  const getItem = () => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(items);
      }, 2000);
    }, []);

    promesa
      .then((item) => {
        console.log("Funca el detalle");
        setDetail(item);
      })
      .catch(() => {
        console.log("no funca el Detalle");
      });
  };

  useEffect(() => {
    getItem();
  });

  return (
    <div>
      <h1> {saludo} </h1>
      <ItemDetail detail={detail}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
