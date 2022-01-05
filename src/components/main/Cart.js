import React from 'react'
import { Link } from 'react-router-dom'
import { MyHook } from "../../../src/context/CartContext"




function Cart() {

    const {elementos} = MyHook();
    
    console.log(elementos)
    
    return (
        <div>
            Soy Cart
            <p>{elementos}</p>
            
            <Link to={`/`}><button variant="primary">Seguir Comprando</button>
        </Link>


        </div>
    )
}

export default Cart
