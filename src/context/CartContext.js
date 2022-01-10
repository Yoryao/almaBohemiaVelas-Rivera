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
  const [cantidadItems, setCantidadItems] = useState(0);

  const [valorCarrito, setValorCarrito] = useState(0);

  const [carrito, setCarrito] = useState([]);

  //fx para agregar producto y cantidad al carrito
  const agregarAlCarrito = (producto, cantidad, id) => {

isInCarrito(id);





    setCantidadItems(cantidadItems + 1);

    const copia_producto = { ...producto };
    copia_producto.cantidad = cantidad;

    ////TODO: NO ESTA SUMANDO EL ULTIMO PRECIO A LA CUENTA TOTAL

    const copia = [...carrito];
    copia.push(copia_producto);
    setCarrito(copia);
    console.log(carrito);
  };

  //fx para borrar un producto del carrito
  const borrarDelCarrito = (id) => {
    const newCarrito = carrito.filter((item) => item.id !== id);

    setCarrito(newCarrito);
    setCantidadItems(cantidadItems - 1);
  };

  //borrar todo el carrito
  const clear = () => {
    setCarrito([]);
    setValorCarrito(0);
    setCantidadItems(0);
  };

  //verificacion si el producto esta en el carrito
  const isInCarrito = (id) => {
    const idInCarrito = carrito.filter((item) => item.id == id);  
      
    if (idInCarrito == [] ) { console.log("No Esta en el carrito") }
    else { console.log("esta en el carrito") }
 

  };

  const valorDelContexto = {
    cantidad,
    setCantidad,
    carrito,
    setCarrito,
    valorCarrito,
    setValorCarrito,

    cantidadItems,
    setCantidadItems,
    agregarAlCarrito,
    borrarDelCarrito,
    clear,
    isInCarrito,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MyProvider;
