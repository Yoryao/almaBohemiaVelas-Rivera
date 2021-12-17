import React, { useState , useEffect } from 'react'
import ItemCount from '../section/ItemCount';

export const ItemDetail = (detail) => {
    return (
        <div>
            <h3>Id:{detail.id}</h3>
            <h3>Nombre: {detail.nombre}</h3>
            <h3>Frangacia: {detail.description}</h3>
            <h3>Precio: ${detail.price}</h3>


            <ItemCount stock={12} initial={5}
            // onAdd={onAdd} 
            />
        </div>
    )
}

export default ItemDetail;