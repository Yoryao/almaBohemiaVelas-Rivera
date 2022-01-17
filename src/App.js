//imports varios
import items from "./items.json";
import links from "./links.json";

//imports componentes
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import Cart from "./components/main/Cart";
import Nosotros from "./components/main/Nosotros";
import Contact from "./components/main/Contact";


//import react
import React  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Provider from "../src/context/CartContext"
import Cashier from "./components/main/cashier";


function App() {
  return (
    <Provider>
      <BrowserRouter>
          <NavBar marca={"alma Bohemia"} links={links} />
      <Routes>
          <Route path="/" element={<ItemListContainer items={items} saludo={"Bienvenidos"} />}/>
          <Route path="/nosotros" element={<Nosotros />} /> 
          <Route path="/productos" element={<ItemListContainer items={items} saludo={"Productos"} />} />
          <Route path="/productos/:categoria" element={ <ItemListContainer items={items} saludo={"Productos por Categoria"} />} />
          <Route path="/item/:id" element={ <ItemDetailContainer items={items} saludo={"Detalle del Producto"} /> } />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cashier"  element={<Cashier />} />

          <Route path="" />
        </Routes>
          <Footer />
      </BrowserRouter>
      </Provider>    
  );
}

export default App;
