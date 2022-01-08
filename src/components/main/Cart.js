import React from "react";
import { Link } from "react-router-dom";
import { MyHook } from "../../../src/context/CartContext";

function Cart() {
  const { carrito } = MyHook();
  return (
    <>
      {carrito.forEach((element) => {
        return (
          <div>
            <h1>{element.nombre}</h1>
            <h1>{element.precio}</h1>
          </div>
        );
      })}
      <Link to={`/productos`}>
        <button variant="primary">Seguir Comprando</button>
      </Link>
    </>
  );
}

export default Cart;
