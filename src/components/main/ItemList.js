// Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red

// Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red.

import React from "react";
import Item from "./Item";

export const ItemList = (props) => {
  return (
    <div>
      {props.productos.map((producto, index) => {
        return (
          <Item
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.description}
            price={producto.price}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
