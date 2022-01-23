import React from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import { MyHook } from "../../../src/context/CartContext";

export const Form = () => {
    let id = 0;

    const {
        carrito,
        setCarrito,
        clear,
        borrarDelCarrito,
        valorCarrito,
        setValorCarrito,
        setCantidadItems,
        cantidadItems,
        orden,
        setOrden,
      } = MyHook();

    const pay = () => {
        const nuevaOrden = {
          cliente: "John Doe",
          telefono: 1122334455,
          email: "email@email",
          productos: carrito,
          fecha: serverTimestamp(),
          total: valorCarrito,
        };

        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, { nuevaOrden }).then(async (resultado) => {
          await setOrden(resultado.id);
          clear();
        });
    };
    
  return (
    <div id="buyForm">
      <input type="text" placeholder="Nombre"></input>
      <input type="telephone" placeholder="Telefono"></input>
      <input type="email" placeholder="Correo Electronico"></input>

      <Link to={`/cashier`} props={id}>
        <button onClick={pay} variant="primary">
          Pagar
        </button>{" "}
      </Link>

      <button onClick={clear} variant="primary">
        Vaciar Carrito
      </button>
    </div>
  );
};
