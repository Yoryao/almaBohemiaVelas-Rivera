import links from "./links.json";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import Cart from "./components/main/Cart";
import Nosotros from "./components/main/Nosotros";
import Contact from "./components/main/Contact";
import Cashier from "./components/main/Cashier";
import Provider from "../src/context/CartContext";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Provider id="mainDiv">
      <BrowserRouter>
        <NavBar marca={"Alma Bohemia"} links={links} />
          <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Bienvenidos"} />}/>
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/productos" element={<ItemListContainer saludo={"Productos"} />}/>
            <Route path="/productos/:categoria" element={<ItemListContainer saludo={"Producto por categoria"} />}/>
            <Route path="/item/:id" element={<ItemDetailContainer saludo={"Detalle del Producto"} />}/>
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cashier" element={<Cashier />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
