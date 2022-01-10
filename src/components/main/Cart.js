import React from "react";
import { Link } from "react-router-dom";
import { MyHook } from "../../../src/context/CartContext";

function Cart() {
  const { carrito, clear, borrarDelCarrito, valorCarrito, setValorCarrito } = MyHook();
  console.log(carrito);
//   valorCarrito = 0;

const sumall = carrito.map(item => item.precioParcial).reduce((prev, curr) => prev + curr, 0);
console.log(parseInt(sumall))
setValorCarrito(sumall);



  return (
    <>
          <h3>Listado de productos en carrito</h3>
      {carrito.map((element) => {

    let parcialProducto = element.cantidad * element.precio;
    element.precioParcial = parcialProducto;

        return (
          <div>
           
            <span>Nombre: {element.nombre} </span>
            <span>Precio: ${element.precio} </span>
            <span>Cantidad: {element.cantidad} </span>
            <span>Precio Parcial: ${parcialProducto} </span>

            <span>id : {element.id}</span>
            <button onClick={() => {borrarDelCarrito(element.id)}}>
                Del</button>
          </div>
        );
    })}
    <span>Precio Total del carrito: ${valorCarrito}</span>
      <Link to={`/productos`}>
        <button variant="primary">Seguir Comprando</button>
      </Link>
      <button onClick={clear} variant="primary">Vaciar Carrito</button>


    </>
  );
}

export default Cart;
