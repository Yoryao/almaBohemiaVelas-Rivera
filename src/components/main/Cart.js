import React from "react";
import { isElementOfType } from "react-dom/cjs/react-dom-test-utils.production.min";
import { Link } from "react-router-dom";
import { MyHook } from "../../../src/context/CartContext";

function Cart() {
  const { carrito, precioTotal, clear, borrarDelCarrito } = MyHook();
  console.log(carrito);
  return (
    <>
          <h3>Listado de productos en carrito</h3>
      {carrito.map((element) => {
        return (
          <div>
           
            <span>Nombre: {element.nombre} </span>
            <span>Precio: ${element.precio}</span>
            <span>id : {element.id}</span>
            <button onClick={() => {borrarDelCarrito(element.id)}}>
                Del</button>
          </div>
        );
    })}
    <span>Precio Total del carrito: ${precioTotal}</span>
      <Link to={`/productos`}>
        <button variant="primary">Seguir Comprando</button>
      </Link>
      <button onClick={clear} variant="primary">Vaciar Carrito</button>


    </>
  );
}

export default Cart;
