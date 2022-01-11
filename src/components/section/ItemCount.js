import React, { useState } from "react";


function ItemCount({ stock, initial, onAdd }) {

  //console.log(initial)
  const [contador, setContador] = useState(initial);
  
  function sumar() {
    if (contador < stock && stock !== 0) {
      setContador(contador + 1);
    }
  }
  function restar() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }
  
  function agregarItem() {
    //agregarAlCarrito();
    onAdd(contador);

  }

  return (
    <div>
      <p>Cantidad de productos: {contador}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={agregarItem}>Agregar</button>
    </div>
  );
}

export default ItemCount;
