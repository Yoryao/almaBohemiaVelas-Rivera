import React from "react";
import { Link } from "react-router-dom";
import { MyHook } from "../../context/CartContext";
import "./cashier.css";

const Cashier = () => {
  const clearOrder = () => {
    setOrden("");
    setName("");
  };

  const { orden, setOrden, name, setName } = MyHook();

  return (
    <div id="divCashier">
      <h1>{`${name}, muchas gracias por tu compra`}</h1>
      <h2>{"Tu compra se ha registrado con el id: " + orden}</h2>

      <Link to={`/productos`}>
        <button onClick={clearOrder}>
          Volver a Home
        </button>
      </Link>
    </div>
  );
};

export default Cashier;
