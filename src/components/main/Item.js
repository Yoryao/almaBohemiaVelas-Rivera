import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className="card" id="divProductos">
      <img variant="top" src={props.img} alt="" />
      <div id="detailInfo">
        <h2>Nombre: {props.nombre}</h2>
        <h4>Precio: $ {props.precio}</h4>
      </div>
      <div id="detailDiv">
        <Link to={`/item/${props.id}`}>
          <button id="detailButton"  variant="primary">
            Ver Detalle
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
