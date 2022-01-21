import React  from "react";
import { MyHook } from "../../../src/context/CartContext"
import "./cartWidget.css"
 
function CartWidget() {

  const { cantidadItems } = MyHook();

  return (
    <>
    { cantidadItems !== 0 ? (
   
        <button id="cartButton">
          <span className="material-icons">shopping_cart</span>
          <span id="itemQuantity">{ cantidadItems }</span>
        </button>
    ) : <p id="emptyCart">Carrito Vacio</p> }
    </>
  );
}

export default CartWidget;
