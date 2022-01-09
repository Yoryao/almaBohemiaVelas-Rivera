//import react
import { useContext, createContext, useState, Children } from "react";

const contexto = createContext();

export const { Provider } = contexto;

export const MyHook = () => {
  return useContext(contexto);
};

const MyProvider = ({ children }) => {
  //cantidad de productos
  const [cantidad, setCantidad] = useState(0);
  //cantidad de items
  const [cantidadItems, setCantidadItems] = useState(0)

  const [precioParcial, setPrecioParcial] = useState(0)
  //precio del total de productos
  const [precioTotal, setPrecioTotal] = useState(0);
  // array de objetos con los productos.
  const [carrito, setCarrito] = useState([]);

  //fx para agregar producto y cantidad al carrito
  const agregarAlCarrito = (producto, cantidad, id) => {








    setCantidadItems(cantidadItems + 1);    
    
    const copia_producto = {...producto}
    copia_producto.cantidad = cantidad


    ////TODO: NO ESTA SUMANDO EL ULTIMO PRECIO A LA CUENTA TOTAL

   setPrecioParcial(copia_producto.precio * cantidad)
   setPrecioTotal(precioTotal + precioParcial)

   console.log(precioParcial)
   console.log(precioTotal)


  const copia = [...carrito]
        copia.push(copia_producto)
        setCarrito(copia) 
        console.log(carrito)

  };

  //fx para borrar un producto del carrito
  const borrarDelCarrito = ( id ) => {

    console.log("borrando elemento con id_ " + id)


  };

  //borrar todo el carrito
  const clear = () => {
    setCarrito([]);
    setPrecioTotal(0);
    setPrecioParcial(0);
  };

  //verificacion si el producto esta en el carrito
  const isInCarrito = (id) => {







  };

  const valorDelContexto = {
    cantidad,    setCantidad,
    carrito,     setCarrito,
    precioTotal, setPrecioTotal,
    cantidadItems, setCantidadItems,
    agregarAlCarrito,
    borrarDelCarrito,
    clear,
    isInCarrito,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MyProvider;
