import React from "react";
import ItemCount from "../section/ItemCount";
import "./item.css"

export const Item = (props) => {

function verDetalle() {

}


  return (
    // <div className="">
    //   {/* <img src={(props.img)} className="App-logo" alt={props.nombre} /> */}
    //   <h2>Nombre: {props.nombre}</h2>
    //   <h4>Precio: $ {props.precio}</h4>
    //   <h2>Descripción: {props.descripcion}</h2>
    //   <button onClick={verDetalle}>Ver Detalle</button>
    // </div>
    
<div class="card">
  <img variant="top" src={(props.img)} />
  <div >
    <h2>Nombre: {props.nombre}</h2>
    <h4>Descripción: {props.descripcion}</h4>
    <h4>Precio: $ {props.precio}</h4>
    
    <button variant="primary">Ver Detalle</button>
     {/* <ItemCount stock={12} initial={5}
           // onAdd={onAdd} 
          /> */}
  </div>
</div>













  );
};

export default Item;
