import React from "react";
import "./formulario.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MyHook } from "../../context/CartContext";
import { db } from "../../firebase";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import {  useNavigate } from "react-router-dom";

export const Formulario = () => {
  const { carrito, valorCarrito, setOrden, clear, setName } = MyHook();

  const navigate = useNavigate();

  return (
    <>
      <Formik initialValues={{ nombre: "", correo: "", correo2: "", telefono: "", }}
        onSubmit={(valores) => {
          const nuevaOrden = {
            cliente: valores.nombre,
            telefono: valores.telefono,
            email: valores.correo,
            productos: carrito,
            fecha: serverTimestamp(),
            total: valorCarrito,
          };

          setName(valores.nombre);

          const orderCollection = collection(db, "orders");
          addDoc(orderCollection, { nuevaOrden }).then(async (resultado) => {
            await setOrden(resultado.id);

            navigate("../Cashier");

            
            clear();
          });
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.nombre) {
            errores.nombre = "Debes ingresar tu nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          if (!valores.correo) {
            errores.correo = "Debes ingresar tu correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo = "El correo no tiene el formato correcto.";
          }

          if (!valores.correo2) {
            errores.correo2 = "Debes ingresar tu correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo2 = "El correo no tiene el formato correcto.";
          } else if (valores.correo != valores.correo2) {
            errores.correo2 = "El correo no coincide con el anterior";
          }

          if (!valores.telefono) {
            errores.telefono = "Debes ingresar tu Telefono";
          } else if (!/^[0-9]{1,40}$/.test(valores.telefono)) {
            errores.telefono = "Solo debes ingresar numeros.";
          }

          return errores;
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
              <div>
              <label htmlFor="nombre">Nombre</label>
              <Field 
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div>{errors.nombre}</div>}
              />
            </div>

            <div>
              <label htmlFor="telefono">Telefono</label>
              <Field
                type="text"
                id="telefono"
                name="telefono"
                placeholder="Ingresa tu telefono"
              />
              <ErrorMessage
                name="telefono"
                component={() => <div>{errors.telefono}</div>}
              />
            </div>

            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="text"
                id="correo"
                name="correo"
                placeholder="Ingresa tu correo"
              />
              <ErrorMessage
                name="correo"
                component={() => <div>{errors.correo}</div>}
              />
            </div>

            <div>
              <label htmlFor="correo2">Correo</label>
              <Field
                type="text"
                id="correo2"
                name="correo2"
                placeholder="Reingresa tu correo"
              />
              <ErrorMessage
                name="correo2"
                component={() => <div>{errors.correo2}</div>}
              />
            </div>

            <button type="submit">Pagar</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
