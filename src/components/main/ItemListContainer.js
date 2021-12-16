import "./ItemListContainer.css";
import React from "react";
import ItemList from "./ItemList";



const products = [
  { id: 1, title: "Mini Bochin", description: "Lavanda", price: 100 },
  { id: 2, title: "Bochin", description: "Magnolia", price: 150 },
  { id: 3, title: "Velon", description: "Sandalo", price: 200 },
]

const promesa = new Promise (( res , rej ) => {
  setTimeout( () => {
      res(products)
  }, 2000)
})

promesa
.then((products) => {
  console.log("Funca")
  console.log(products)
})
.catch( () => {console.log("no funca")} )


export const ItemListContainer = () => {
  


  return (
    <div>
      <h1>Bienvenidos </h1>
      <nav>
        <ItemList productos={products} />
           );
      {" "}
      </nav>
    </div>
  );
};

export default ItemListContainer;





