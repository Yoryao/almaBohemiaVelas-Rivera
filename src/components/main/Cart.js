import React from "react";
import { Link } from "react-router-dom";
import { MyHook } from "../../../src/context/CartContext";

function Cart() {
  const { carrito } = MyHook();
  console.log(carrito);
  return (
    <>
      {carrito.map((element) => {
        return (
          <div>
            <h3>Listado de productos en carrito</h3>
            <span>Nombre: {element.nombre}</span>
            <span>Precio: ${element.precio}</span>
            <button>Del</button>
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
