import React from 'react'
import { Link } from 'react-router-dom'

const Cashier = ( id ) => {

console.log(id)

    return (
        <>

<h2>{"Su compra se ha registrado con el id: " + id}</h2>

<Link to={`/productos`}>
          <button variant="primary">Seguir Comprando</button>
        </Link>


        </>
    )
}

export default Cashier

