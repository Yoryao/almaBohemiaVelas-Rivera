import React  from "react";
import { MyHook } from "../../../src/context/CartContext"
 


function CartWidget() {

  const { cantidadItems, carrito } = MyHook();
  

  
  return (
    <>
   
        <button>
          <span className="material-icons">shopping_cart</span>
          <span>HOLA: { cantidadItems }</span>
        </button>
     
    </>
  );
}

export default CartWidget;
