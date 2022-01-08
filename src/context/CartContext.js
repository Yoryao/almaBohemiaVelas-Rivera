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
  const [cantidadItems, setCantidadItems] = useState(150)
  //precio del total de productos
  const [precioTotal, setPrecioTotal] = useState(0);
  // array de objetos con los productos.
  const [carrito, setCarrito] = useState({});

  //fx para agregar producto y cantidad al carrito
  const agregarAlCarrito = (producto, cantidad) => {
    
    console.log("imprimiendo desde Context - producto: " + producto)
    
    console.log("imprimiendo desde Context - cantidad: " + cantidad)
    //si esta en carrito modifico
  };

  //fx para borrar un producto del carrito
  const borrarDelCarrito = () => {};

  //borrar todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  //verificacion si el producto esta en el carrito
  const isInCarrito = (id) => {};

  const valorDelContexto = {
    cantidad,    setCantidad,
    carrito,     setCarrito,
    precioTotal, setPrecioTotal,
    agregarAlCarrito,
    borrarDelCarrito,
    vaciarCarrito,
    isInCarrito,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MyProvider;
