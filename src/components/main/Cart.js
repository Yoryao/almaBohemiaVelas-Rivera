import React from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import { MyHook } from "../../../src/context/CartContext";
import { db } from "../../firebase";
import "./cart.css"

function Cart() {

let id;

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
    setOrden
  } = MyHook();

  const totalCarrito = carrito
    .map((item) => item.precioParcial)
    .reduce((prev, curr) => prev + curr, 0);
  setValorCarrito(totalCarrito);

  const sumar = (id) => {
    let cantidadModificada = carrito.find((item) => item.id == id);
    cantidadModificada.cantidad++;
    setCantidadItems(cantidadItems + 1);
  };

  const restar = (id) => {
    let cantidadModificada = carrito.find((item) => item.id == id);
    if (cantidadModificada.cantidad > 0) {
      cantidadModificada.cantidad--;
    }
    setCantidadItems(cantidadItems - 1);
  };

  const pay = () => {
    const nuevaOrden = {
      cliente: "John Doe",
      telefono: 1122334455,
      email: "email@email",
      productos: carrito,
      fecha: serverTimestamp(),
      total: totalCarrito,
    };

const orderCollection = collection(db, "orders");
addDoc(orderCollection, {nuevaOrden})
    .then( 
     async  (resultado)  =>  {
        await setOrden(resultado.id);
        clear();
      })     
  };

  return (
    <div id="mainCart">
        <h1 id="title">Carrito</h1>
      {carrito.length > 0 ? (
        <div  id="secondaryCart">
          <h3 id="cartTitle">Listado de productos en carrito</h3>
                <tr>
                <th>Nombre:</th>
                <th>Precio:</th>
                <th>Cantidad:</th>
              <th>Precio Parcial:</th>
              </tr>

          {carrito.map((element) => {
            let parcialProducto = element.cantidad * element.precio;
            element.precioParcial = parcialProducto;

            return (
                  <div id="cashierDiv">
                       <div id="tabla">
                       <tr>

                <td> {element.nombre} </td>
                <td> ${element.precio} </td>
                <td>  <button  class="addRemBtn" onClick={() => {
                    sumar(element.id);
                  }}
                >
                  +
                </button> {element.cantidad}  <button class="addRemBtn"
                  onClick={() => {
                    restar(element.id);
                  }}
                >
                  -
                </button> </td>
                <td>${parcialProducto} 
               
               
                <button class="addRemBtn"
                  onClick={() => {
                    borrarDelCarrito(element.id);
                  }}
                >
                  {" "}
                  X
                </button></td>
                </tr>

              </div>



</div>








            );
          })}
          <span>Precio Total del carrito: ${valorCarrito}</span>

<div id="buyForm">
<input type="text" placeholder="Nombre"></input>
<input type="telephone" placeholder="Telefono"></input>
<input type="email" placeholder="Correo Electronico"></input>

<Link to={`/cashier`} props={id}>
<button onClick={pay} variant="primary">Pagar</button> </Link>

<button onClick={clear} variant="primary">
        Vaciar Carrito
      </button>


</div>





        </div>
      ) : (
        <p>El carrito esta Vacio</p>
      )}

      <Link to={`/productos`}>
        <button variant="primary">Seguir Comprando</button>
      </Link>
    

       




    </div>
  );
}

export default Cart;
