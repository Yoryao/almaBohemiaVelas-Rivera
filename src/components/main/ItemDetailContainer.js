import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const inicial = { id: 1, nombre: "difusor", description: "Coco", price: 190, img: "./vela.jpg" };

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  const getItem = () => {
 
      const promesa = new Promise((res, rej) => {
        setTimeout(() => {
          res(inicial);
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
})





  return (
    <div>
      <h1> ACA VA UN ITEM DETAIL </h1>
      <ItemDetail detail={detail}> ITEMDETAIL </ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
