import React from "react";
import Item from "./Item";

export const ItemList = (props) => {
  return (
    <div>
      {props.productos.map((producto, index) => {
        return (
          <Item
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            img={producto.img}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
