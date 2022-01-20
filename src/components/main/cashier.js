import React from 'react'
import { Link } from 'react-router-dom'
import { MyHook } from "../../context/CartContext";
import "./cashier.css"


const Cashier = () => {

const clearOrder = () =>
{
    setOrden("");
}

    const {
        orden, 
        setOrden,
      } = MyHook();

    return (
        <div id="divCashier">

<h2>{"Su compra se ha registrado con el id: " + orden}</h2>


<Link to={`/productos`}>
          <button onClick={clearOrder} variant="primary">Seguir Comprando</button>
        </Link>
       </div>
    )
}

export default Cashier

