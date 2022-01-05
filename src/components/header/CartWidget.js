import React  from "react";
import { MyHook } from "../../../src/context/CartContext"
 


function CartWidget() {

  const { cantidad } = MyHook();
  

  
  return (
    <>
   
        <button>
          <span className="material-icons">shopping_cart</span>
          <span>HOLA: { cantidad }</span>
        </button>
     
    </>
  );
}

export default CartWidget;
