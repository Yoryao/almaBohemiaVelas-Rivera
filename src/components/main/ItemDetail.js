import React, { useState } from "react";
import ItemCount from "../section/ItemCount";
import { Link } from "react-router-dom";
import { MyHook } from "../../context/CartContext";
import "./itemDetail.css"


const ItemDetail = (  { producto } ) => {
  
  const { agregarAlCarrito  } = MyHook();
  
  const [ocultar, setOcultar] = useState(true);
  const [inicial, setInicial] = useState(0);

  const onAdd = (contador) => {
    setOcultar(false);
    setInicial(contador);
    agregarAlCarrito( producto, contador, producto.id);
  };

  if (ocultar) {
    return (
      <div class="cardDetail">
        <img class="imgDetail" alt="logo" src={producto.img} />
          <div class="infoDetail">
            <h3>Nombre: {producto.nombre}</h3>
            <h4>Descripción: {producto.descripcion}</h4>
            <h4>Precio: ${producto.precio}</h4>
          </div>
          <div>
            <ItemCount initial={inicial} onAdd={onAdd} />
          </div>
      </div>
    );
  } else {
    return (
      <div class="cardDetail">
        <img  class="imgDetail" alt="logo" src={producto.img} />
        <div class="infoDetail">
            <h3>Nombre: {producto.nombre}</h3>
            <h3>Notificación: se agregaron {inicial} unidades</h3>
        </div>
        
        <div id="btnContainer">
        
           <Link to={`/cart`}>
             <button class="addBtn" variant="primary">Terminar Compra</button>
           </Link>
           <Link to={`/productos`}>
             <button class="addBtn" variant="primary">Seguir Comprando</button>
           </Link>
        </div>
      
      </div>
    );
  }
};

export default ItemDetail;
