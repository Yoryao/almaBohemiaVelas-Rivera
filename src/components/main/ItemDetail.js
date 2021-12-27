import React from "react";
import ItemCount from "../section/ItemCount";

export const ItemDetail = (props) => {
 

  return (
    <div>
      <img alt="logo" src={(props.detail.img)}  />
      <h3>Nombre: {props.detail.nombre}</h3>
      <h3>Descripción: {props.detail.descripcion}</h3>
      <h3>Precio: ${props.detail.precio}</h3>
      <ItemCount stock={7} initial={12} // onAdd={onAdd}
      />
    </div>
  );
};

export default ItemDetail;
