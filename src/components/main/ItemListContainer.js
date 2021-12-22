import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

export const ItemListContainer = ({ items , saludo }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(items);
      }, 2000);
    }, []);

    promesa
      .then((products) => {
        setProductos(products);
      })
      .catch(() => {});
  });

  return (
    <div>
      <h1>{saludo}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
