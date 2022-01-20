import React, { useState } from "react";
import ItemCount from "../section/ItemCount";
import { Link } from "react-router-dom";
import { MyHook } from "../../context/CartContext";
import "./itemDetail.css"


const ItemDetail = (  { producto } ) => {
  
  const { agregarAlCarrito  } = MyHook();
  
  const [ocultar, setOcultar] = useState(true);
  const [stock, setStock] = useState(12);
  const [inicial, setInicial] = useState(0);

  const onAdd = (contador) => {
    setOcultar(false);
    setInicial(contador);
    agregarAlCarrito( producto, contador, producto.id);
  };

  if (ocultar) {
    return (
      <div id="cardDetail">
        <img id="imgDetail" alt="logo" src={producto.img} />
        <h4>Descripción: {producto.descripcion}</h4>
        <h4>Categoria: {producto.categoria}</h4>
        <h4>Precio: ${producto.precio}</h4>

        <ItemCount stock={stock} initial={inicial} onAdd={onAdd} />
      </div>
    );
  } else {
    return (
      <div>
        <img alt="logo" src={producto.img} />
        <h3>Nombre: {producto.nombre}</h3>
        <h3>Descripción: {producto.descripcion}</h3>
        <h3>Notificación: se agregaron {inicial} unidades</h3>
        <Link to={`/cart`}>
          <button variant="primary">Terminar Comprar</button>
        </Link>
        <Link to={`/productos`}>
          <button variant="primary">Seguir Comprando</button>
        </Link>
      </div>
    );
  }
};

export default ItemDetail;
