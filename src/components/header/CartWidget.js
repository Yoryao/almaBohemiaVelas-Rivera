import React  from "react";
import { MyHook } from "../../../src/context/CartContext"
 


function CartWidget() {

  const { cantidadItems } = MyHook();
  

  
  return (
    <>
    { cantidadItems !== 0 ? (
   
        <button>
          <span className="material-icons">shopping_cart</span>
          <span>{ cantidadItems }</span>
        </button>
    ) : <p>Carrito Vacio</p> }
    </>
  );
}

export default CartWidget;
