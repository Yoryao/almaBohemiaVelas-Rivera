import React from "react";
import ItemCount from "../section/ItemCount";

export const Item = (props) => {

function verDetalle() {

}


  return (
    <div className="">
      {/* <img src={(props.img)} className="App-logo" alt={props.nombre} /> */}
      <h2>Nombre: {props.nombre}</h2>
      <h4>Precio: $ {props.precio}</h4>
      <h2>Descripción: {props.descripcion}</h2>
      <button onClick={verDetalle}>Ver Detalle</button>
      {/* <ItemCount stock={12} initial={5}
            // onAdd={onAdd} 
            /> */}
    </div>
  );
};

export default Item;
