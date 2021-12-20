import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

export const ItemListContainer = ({ items }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(items);
      }, 2000);
    }, []);

    promesa
      .then((products) => {
        console.log("Funca");
        setProductos(products);
      })
      .catch(() => {
        console.log("no funca");
      });
  });

  return (
    <div>
      <h1>Bienvenidos </h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;