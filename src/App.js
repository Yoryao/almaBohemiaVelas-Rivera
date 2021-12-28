import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import items from "./items.json";
import links from "./links.json";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Cart from "./components/main/Cart";
import Nosotros from "./components/main/Nosotros";
import Contact from "./components/main/Contact";


function App() {
  return (
    <BrowserRouter>
      <NavBar marca={"Alma Bohemia Velas"} links={links} />
<Routes>
    <Route path="/" element={<ItemListContainer items={items} saludo={"Bienvenidos"} />}/>
    <Route path="/nosotros" element={<Nosotros/>}/>
    <Route path="/productos" element={<ItemListContainer items={items} saludo={"Productos"} />}/>
    <Route path="/categoria/:id" element={<ItemListContainer items={items} saludo={"Productos por Categoria"} />}/>
    <Route path="/item/:id" element={ <ItemDetailContainer items={items} saludo={"Detalle del Producto"} />}/>
    <Route path="/contacto" element={<Contact />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="" />
</Routes>
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
