import React from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import { MyHook } from "../../../src/context/CartContext";
import { useState } from "react";
import "./form.css";

export const Form = () => {
  let valid = false;
  
  
  
  const [telefono, setTelefono] = useState(0);
  const [mail, setMail] = useState("");
  const [mail2, setMail2] = useState("");
  
  const { carrito, clear, valorCarrito, setOrden, name, setName } = MyHook();
  
  const registerName = (e) => {
    setName(e.target.value);
  };
  const registerTelefono = (e) => {
    setTelefono(e.target.value);
  };
  const registerMail = (e) => {
    setMail(e.target.value);
  };

  
  const registerMail2 = (e) => {
    setMail2(e.target.value);
  };
  
  const pay = () => {
    
    const nuevaOrden = {
      cliente: { name },
      telefono: { telefono },
      email: { mail },
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
  
    if (name != "" 
    && telefono != "" 
    && mail  != "" 
    && mail === mail2) {
      valid = true;
    }
  
  return (
    <div id="buyForm">
      <h4>Completa tus datos y presiona "pagar" para completar tu compra.</h4>
      <h4>Recuerda completar todos tus datos y que los mails sean iguales.</h4>

      <form >
        <input onChange={registerName} type="text" placeholder="Ingresa tu Nombre" required ></input>
        <input onChange={registerTelefono} type="number" placeholder="Ingresa tu Telefono" required></input>
        <input onChange={registerMail} type="email" placeholder="Ingresa tu E-mail" required></input>
        <input onChange={registerMail2} type="email" placeholder="Reingresa tu E-mail" required></input>

      </form>    

{ valid ? <button onClick={pay} id="payBtn"> <Link to={`/cashier`}>Pagar</Link></button> : "" }
       
    </div>
  );
};
