import React from "react";
import { Link } from "react-router-dom";
import { MyHook } from "../../../src/context/CartContext";
import "./cart.css";
import { Formulario } from "./Form"

function Cart() {
 

  const {
    carrito,
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
    let cantidadModificada = carrito.find((item) => item.id === id);
    cantidadModificada.cantidad++;
    setCantidadItems(cantidadItems + 1);
  };

  const restar = (id) => {
    let cantidadModificada = carrito.find((item) => item.id === id);
    if (cantidadModificada.cantidad > 0) {
      cantidadModificada.cantidad--;
    }
    setCantidadItems(cantidadItems - 1);
  };

   return (
    <div id="mainCart">
      <h1 id="title">Carrito</h1>
      {carrito.length > 0 ? (
        <div id="secondaryCart">
          <h3 id="cartTitle">Listado de productos en carrito</h3>
          <tr id="tableHead">
            <th className="headCell">Nombre:</th>
            <th className="headCell">Precio:</th>
            <th className="headCell">Cantidad:</th>
            <th className="headCell">Precio Parcial:</th>
            <th className="headCell">Eliminar:</th>
          </tr>

          {carrito.map((element) => {
            let parcialProducto = element.cantidad * element.precio;
            element.precioParcial = parcialProducto;

            return (
              <div id="cashierDiv">
                <div id="tabla">
                  <tr>
                    <td className="tableCell"> {element.nombre} </td>
                    <td className="tableCell"> ${element.precio} </td>
                    <td className="tableCell">
                      {" "}
                      <button
                        className="addRemBtn"
                        onClick={() => {
                          restar(element.id);
                        }}
                      >
                        -
                      </button>{" "}
                      {element.cantidad}{" "}
                      <button
                        className="addRemBtn"
                        onClick={() => {
                          sumar(element.id);
                        }}
                      >
                        +
                      </button>{" "}
                    </td>
                    <td className="tableCell">${parcialProducto}</td>
                    <td className="tableCell">
                      <button
                        className="addRemBtn"
                        onClick={() => {
                          borrarDelCarrito(element.id);
                        }}
                      >
                        {" "}
                        X
                      </button>
                    </td>
                  </tr>
                </div>
              </div>
            );
          })}

          <span id="finalPrice">Precio Total del carrito: ${valorCarrito}</span>

            <button className="btnInCart" onClick={clear} variant="primary">
              Vaciar Carrito
            </button>

<Formulario></Formulario>

          </div>
      ) : (
        <p id="emptyCart">El carrito esta Vacio</p>
      )}

      <Link to={`/productos`}>
        <button id="emptyCartBtn"  className="btnInCart" >Seguir Comprando</button>
      </Link>
    </div>
  );
}

export default Cart;
