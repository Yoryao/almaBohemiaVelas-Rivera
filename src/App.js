import logo from "./candletitle.svg";
//import "./App.css";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import items from "./items.json";
import itemsInicial from "./itemInicial.json";
import links from "./links.json";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import Cart from "./components/main/Cart";
import Nosotros from "./components/main/Nosotros";
import Contact from "./components/main/Contact";





function App() {
  return (
    <BrowserRouter>
      <NavBar marca={"aca va la marca"} links={links} />
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/nosotros" element={<Nosotros/>}/>
    <Route path="/productos" element={<ItemListContainer items={items} saludo={"Bienvenidos"} />}/>
    <Route path="/categoria/:id" element={<ItemListContainer items={items} saludo={"Bienvenidos"} />}/>
    <Route path="/contacto" element={<Contact />}/>
    <Route path="/producto/:id" element={ <ItemDetailContainer items={itemsInicial} saludo={"Detalle del Producto"} />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="" />
</Routes>
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
