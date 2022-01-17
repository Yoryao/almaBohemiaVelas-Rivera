import React from 'react'
import { Link } from 'react-router-dom'
import { MyHook } from "../../../src/context/CartContext";


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
        <>

<h2>{"Su compra se ha registrado con el id: " + orden}</h2>


<Link to={`/productos`}>
          <button onClick={clearOrder} variant="primary">Seguir Comprando</button>
        </Link>
       </>
    )
}

export default Cashier

