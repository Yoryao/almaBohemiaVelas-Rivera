import React, { useState } from "react";
import "./itemCount.css";

function ItemCount({ initial, onAdd }) {
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
        <button class="addRemBtn" id="agregar" onClick={sumar}>
          +
        </button>
        {contador}
        <button class="addRemBtn" id="reducir" onClick={restar}>
          -
        </button>
      </p>

      <button id="agregarBtn" onClick={agregarItem}>
        Agregar al Carrito
      </button>
    </div> 
  )
} else {

  return (
  <p id="itemCount">
  Unidades:
  <button class="addRemBtn" id="agregar" onClick={sumar}>
    +
  </button>
  {contador}
  <button class="addRemBtn" id="reducir" onClick={restar}>
    -
  </button>
</p>
  )
};
}

export default ItemCount;
