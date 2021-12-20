import React, { useState , useEffect } from 'react'
import ItemCount from '../section/ItemCount';

export const ItemDetail = (props) => {
    console.log(props)
    return (
        <div>
            <h3>Id:{props.id}</h3>
            <h3>Nombre: {props.nombre}</h3>
            <h3>Frangacia: {props.description}</h3>
            <h3>Precio: ${props.price}</h3>
            <ItemCount stock={12} initial={5}
            // onAdd={onAdd} 
            />
        </div>
    )
}

export default ItemDetail;