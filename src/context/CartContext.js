//import react
import { useContext, createContext, useState, Children } from "react";

const contexto = createContext();

export const { Provider } = contexto;

export const MyHook = () => {
  return useContext(contexto);
};

 const MyProvider = ({children}) => {

    const [cantidad, setCantidad] = useState(0);

    const [carrito, setCarrito] = useState({});

    const agregarAlCarrito = ( producto , cantidad) => {

        //si esta en carrito modifico
    }

    const borrarDelCarrito = () => {}

    const vaciarCarrito = () => { setCarrito( [] ) }

    const isInCarrito = (id) => {};

    const valorDelContexto = {
        cantidad , setCantidad, carrito , agregarAlCarrito , borrarDelCarrito , vaciarCarrito , isInCarrito
    }



    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )


 }

export default MyProvider;