import React, { useContext , createContext } from "react";
import App from "../../App";



function CartWidget() {
  const cantidad = 0;

  return (
    <>
   
        <button>
          <span className="material-icons">shopping_cart</span>
          <span>HOLA: {cantidad}</span>
        </button>
     
    </>
  );
}

export default CartWidget;
