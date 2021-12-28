import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
    return (
        <div>
            Soy Cart
            <Link to={`/`}><button variant="primary">Seguir Comprando</button>
        </Link>


        </div>
    )
}

export default Cart
