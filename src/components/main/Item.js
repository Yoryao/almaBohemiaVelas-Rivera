import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

export const Item = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt={`photo_${props.nombre}`} />
            <div id="detailInfo">
                <h3>Nombre: {props.nombre}</h3>
                <h4>Precio: $ {props.precio}</h4>
            </div>
            <div>
                <Link to={`/item/${props.id}`}>
                    <button id="detailButton">
                      Ver Detalle
                    </button>
                </Link>
            </div>
        </div>
  );
};

export default Item;
