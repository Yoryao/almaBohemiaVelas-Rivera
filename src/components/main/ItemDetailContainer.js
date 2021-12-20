import React, { useState, useEffect } from "react";
import Item from "./Item";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  console.log(props);

  const [detail, setDetail] = useState({});

  console.log(detail);

  const getItem = () => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(props);
      }, 2000);
    });

    promesa
      .then((item) => {
        console.log("Funca el detalle");
        setDetail(item);
      })
      .catch(() => {
        console.log("no funca el Detalle");
      });
  };

  useEffect(() => getItem(), []);
  console.log({detail});

  return (
    <div>
      <h1> ACA VA UN ITEM DETAIL </h1>
      <ItemDetail detail={detail} > ITEMDETAIL </ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
