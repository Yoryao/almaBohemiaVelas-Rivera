import React, { useState , useEffect } from 'react'
import ItemDetail from './ItemDetail';


export const ItemDetailContainer = (items) => {


    const [ detail, setDetail ] = useState({});



    useEffect(() => {
      const promesa = new Promise((res, rej) => {
        setTimeout(() => {
          res(items);
        }, 2000);
      });
  
      promesa
        .then((item) => {
          console.log("Funca");
          setDetail( item )
        })
        .catch(() => {
          console.log("no funca");
        });
    });
  
    return (
      <div>
        <h1> ACA VA UN ITEM DETAIL </h1>
        
          <ItemDetail item={detail}> ITEMDETAIL </ItemDetail> 
      </div>
      )
}

export default ItemDetailContainer;