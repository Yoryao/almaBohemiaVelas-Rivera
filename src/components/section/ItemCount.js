import React, { useState } from "react";
import "./itemCount.css";

function ItemCount({ initial, onAdd }) {
  //console.log(initial)
  const [contador, setContador] = useState(initial);

  function sumar() {
    setContador(contador + 1);
  }

  function restar() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  function agregarItem() {
    onAdd(contador);
  }

if (contador > 0) {

  return (
    <div>
      <p id="itemCount">
        Unidades:
        <button class="addRemBtn" id="add" onClick={sumar}>
          +
        </button>
        {contador}
        <button class="addRemBtn" id="rem" onClick={restar}>
          -
        </button>
      </p>

      <button id="addBtn" onClick={agregarItem}>
        Agregar al Carrito
      </button>
    </div> 
  )
} else {

  return (
  <p id="itemCount">
  Unidades:
  <button class="addRemBtn" id="add" onClick={sumar}>
    +
  </button>
  {contador}
  <button class="addRemBtn" id="rem" onClick={restar}>
    -
  </button>
</p>
  )
};
}

export default ItemCount;
