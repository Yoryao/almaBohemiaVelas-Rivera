import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const ItemDetailContainer = ({ items, saludo }) => {
  const [producto, setProducto] = useState({});

  let { id } = useParams();

  useEffect(
    () => {
      const productosQuery = collection(db, "productos");

      const consulta = doc(productosQuery, id);

      getDoc(consulta)
        .then((resultado) => {
          setProducto(resultado.data());
        })
        .catch((error) => {
          console.log(error);
        });
    },   [id]
    );

    // const getItem = () => {
    //   const promesa = new Promise((res, rej) => {
    //     setTimeout(() => {
    //       res(items.find((item) => item.id == id));
    //     }, 2);
    //   }, []);

    //   promesa
    //     .then((seleccionado) => {
    //       setProducto(seleccionado);
    //     })
    //     .catch(() => {
    //       console.log("Error en la promesa");
    //        });
    // };

    // useEffect(() => getItem(),
 

  return (
    <div>
      <h1> {saludo} </h1>
      <ItemDetail producto={producto}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
