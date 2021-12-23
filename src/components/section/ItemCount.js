import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
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
    console.log("agregando desde Item Count");
    //onAdd(contador);
  }

  function restablecer() {
    setContador(0);
  }

  function getItem() {}

  return (
    <div>
      <p>Cantidad de productos: {contador}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      {/* <button onClick={restablecer}>Restablecer</button> */}
      <button onClick={agregarItem}>Agregar</button>
      {/* <button onClick={getItem}>Detalle</button> */}
    </div>
  );
}

export default ItemCount;
