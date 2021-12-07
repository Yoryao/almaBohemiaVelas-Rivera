import "./ItemListContainer.css";
import React from "react";

export const ItemListContainer = (props) => {
  console.log(props.nombre);

  return (
    <div>
      <h1>Bienvenidos {props.action}</h1>
      <nav>
        {props.links.map(( accesos , index) => {
          return (
            <a className="linksIngreso" href={accesos.link}>
              {accesos.name}
            </a>
          );
        })}{" "}
      </nav>
    </div>
  );
};

export default ItemListContainer;





