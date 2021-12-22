import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"

export const ItemListContainer = ({ items , saludo }) => {
  const [productos, setProductos] = useState([]);

  const { id } = useParams();
  console.log(id);

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
