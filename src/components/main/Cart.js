import React from "react";
import { Link } from "react-router-dom";
import { MyHook } from "../../../src/context/CartContext";

function Cart() {
  const {
    carrito,
    setCarrito,
    clear,
    borrarDelCarrito,
    valorCarrito,
    setValorCarrito,
    setCantidadItems,
    cantidadItems,
  } = MyHook();

  const totalCarrito = carrito
    .map((item) => item.precioParcial)
    .reduce((prev, curr) => prev + curr, 0);
  setValorCarrito(totalCarrito);

  const sumar = (id) => {
    let cantidadModificada = carrito.find((item) => item.id == id);
    cantidadModificada.cantidad++;
    setCantidadItems(cantidadItems + 1);
  };

  const restar = (id) => {
    let cantidadModificada = carrito.find((item) => item.id == id);
    if (cantidadModificada.cantidad > 0) {
      cantidadModificada.cantidad--;
    }
    setCantidadItems(cantidadItems - 1);

  };

  return (
    <>
      {carrito.length > 0 ? (
        <div>
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
                <button
                  onClick={() => {
                    sumar(element.id);
                  }}
                >
                  sumar
                </button>
                <button
                  onClick={() => {
                    restar(element.id);
                  }}
                >
                  restar
                </button>
                <button
                  onClick={() => {
                    borrarDelCarrito(element.id);
                  }}
                >
                  {" "}
                  Eliminar
                </button>
              </div>
            );
          })}
          ;<span>Precio Total del carrito: ${valorCarrito}</span>
        </div>
      ) : (
        <p>El carrito esta Vacio</p>
      )}

      <Link to={`/productos`}>
        <button variant="primary">Seguir Comprando</button>
      </Link>
      <button onClick={clear} variant="primary">
        Vaciar Carrito
      </button>

      <button variant="primary">Pagar</button>
    </>
  );
}

export default Cart;
