import React from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import { MyHook } from "../../../src/context/CartContext";
import { useState } from "react";

export const Form = () => {
    let id = 0;

    const [telefono, setTelefono] = useState(0);
    const [mail, setMail] = useState("");

    const {
        carrito,
        clear,
        valorCarrito,
        setOrden,
        name, setName
    } = MyHook();

    const registerName = ( e ) => {setName(e.target.value)}
    const registerTelefono = ( e ) => {setTelefono(e.target.value)}
    const registerMail = ( e ) => {setMail(e.target.value)}

     const pay = () => {
       const nuevaOrden = {
          cliente: {name},
          telefono: {telefono},
          email: {mail},
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
      <input onChange={registerName} id="name" type="text" placeholder="Nombre"></input>
      <input onChange={registerTelefono} id="telefono" type="telephone" placeholder="Telefono"></input>
      <input onChange={registerMail} id="email" type="email" placeholder="Correo Electronico"></input>

      <Link to={`/cashier`} props={id}>
        <button onClick={pay} variant="primary">
          Pagar
        </button>{" "}
      </Link>
    </div>
  );
};
