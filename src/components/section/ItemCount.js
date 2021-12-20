import React, { useState } from "react";

// - De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd
// - Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la cantidad seleccionada por el usuario.

// Detalle importante: como sabes, todavía no tenemos nuestro detalle de ítem, y este desarrollo es parte de él, así que por el momento puedes probar e importar este componente dentro del ItemListContainer, sólo a propósitos de prueba. Después lo sacaremos de aquí y lo incluiremos en el detalle del ítem

function ItemCount({stock , initial, onAdd}) {
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
    console.log("agregando desde Item Count")
    //onAdd(contador);
  }

  function restablecer() {
    setContador(0);
  }

  function getItem() {

  }

  return (
    <div>
      <p>Cantidad de productos: {contador}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={restablecer}>Restablecer</button>
      <button onClick={agregarItem}>Agregar</button>
      <button onClick={getItem}>Detalle</button>
    </div>
  );
}

export default ItemCount;
