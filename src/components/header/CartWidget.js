import React  from "react";
import { MyHook } from "../../../src/context/CartContext"
import "./cartWidget.css"
 
function CartWidget() {

  const { cantidadItems } = MyHook();

  return (
    <>
    { cantidadItems !== 0 ? (
   
        <button id="carritoBtn">
          <span className="material-icons">shopping_cart</span>
          <span id="carritoCantidad">{ cantidadItems }</span>
        </button>
    ) : <p id="carritoVacio">Carrito Vacio</p> }
    </>
  );
}

export default CartWidget;
