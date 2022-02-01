//import react
import { useContext, createContext, useState } from "react";

const contexto = createContext();

export const { Provider } = contexto;

export const MyHook = () => {
  return useContext(contexto);
};

const MyProvider = ({ children }) => {

  const [name, setName] = useState("");
  const [orden, setOrden] = useState("")
  const [cantidad, setCantidad] = useState(0);
  const [cantidadItems, setCantidadItems] = useState(0);
  const [valorCarrito, setValorCarrito] = useState(0);
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad, id) => {
    if (isInCarrito(id)) {


      let cantidadModificada = carrito.find((item) => item.id === id);
      cantidadModificada.cantidad += cantidad;

      const newCarrito = carrito.filter((item) => item.id !== id);
      newCarrito.push(cantidadModificada);
      setCarrito(newCarrito);

        setCantidadItems(cantidadItems + cantidad);


    } else {
        
        const copia_producto = { ...producto };
        copia_producto.cantidad = cantidad;
        
        const copia = [...carrito];
        copia.push(copia_producto);
        setCarrito(copia);

        setCantidadItems(cantidadItems + copia_producto.cantidad);
    }
  };
  //fx para borrar un producto del carrito
  const borrarDelCarrito = (id) => {
const cantidadBorrada = carrito.find((item) => item.id === id)

    const newCarrito = carrito.filter((item) => item.id !== id);

    setCarrito(newCarrito);
    setCantidadItems(cantidadItems - cantidadBorrada.cantidad);
  };

  const clear = () => {
    setCarrito([]);
    setValorCarrito(0);
    setCantidadItems(0);
   };

  const isInCarrito = (id) => {
    const isInCarrito = carrito.find((item) => item.id === id);
    return isInCarrito ? true : false;
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
    orden,
    setOrden,
    name, setName, 
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MyProvider;
