//import react
import { useContext, createContext, useState, Children } from "react";
import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min";

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
   
    setCantidadItems(cantidadItems + 1);
    
    const copia_producto = { ...producto };
    copia_producto.cantidad = cantidad;
    
    const copia = [...carrito];
    copia.push(copia_producto);
    setCarrito(copia);
          
    // if(true){
        
        
        //     let cantidadModificada = carrito.find((item) => item.id == id)
        //     cantidadModificada.cantidad = cantidad;
        
        // } else {
            
            //     setCantidadItems(cantidadItems + 1);
            
            //     const copia_producto = { ...producto };
            //     copia_producto.cantidad = cantidad;
            
            //     const copia = [...carrito];
            //     copia.push(copia_producto);
            //     setCarrito(copia);
            
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



//   //verificacion si el producto esta en el carrito
  const isInCarrito = (id) => {}
//     const idInCarrito = carrito.find((item) => item.id == id);
// console.log(idInCarrito)
//     if (idInCarrito == []) {
//         return true;
//     } else {
//         return false;
//     };
//   };

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
