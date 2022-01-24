import React from 'react'
import { Link } from 'react-router-dom'
import { MyHook } from "../../context/CartContext";
import "./cashier.css"


const Cashier = () => {

const clearOrder = () => { setOrden("") };


    const {
        orden, 
        setOrden,
        name
      } = MyHook();

    return (
        <div id="divCashier">

<h1>{`${name} Gracias por tu compra`}</h1>
<h2>{"Su compra se ha registrado con el id: " + orden}</h2>


<Link to={`/productos`}>
          <button onClick={clearOrder} variant="primary">Volver a Home</button>
        </Link>
       </div>
    )
}

export default Cashier

