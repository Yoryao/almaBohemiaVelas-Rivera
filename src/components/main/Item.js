// Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red

// Item.js: Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles (los desarrollaremos más adelante)

import React from "react";
import ItemCount from "../section/ItemCount";

export const Item = (props) => {
  return (
    <div className="">
            <img src={"./vela.jpg"} className="App-logo" alt="logo" />
      <h2>Nombre: {props.nombre}</h2>
      <h4>Precio: $ {props.price}</h4>
      <h2>Nombre: {props.descripcion}</h2>
      <ItemCount stock={12} initial={5}
            // onAdd={onAdd} 
            />
    </div>
  );
};

export default Item;
