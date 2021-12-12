import React, { useState } from "react";

function ItemCount() {
  const [contador, setContador] = useState(0);

  function sumar() {
    setContador(contador + 1);
  }

  function restar() {
      if (contador > 0) {
    setContador(contador - 1);
  }
  }

  function restablecer() {
    setContador(0);
  }

  return (
    <div>
      <p>{contador}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={restablecer}>Restablecer</button>
      <button onClick="agregar">Agregar</button>
    </div>
  );
}

export default ItemCount;
