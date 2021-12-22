import logo from "./candletitle.svg";
import "./App.css";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import items from "./items.json";
import itemsInicial from "./itemInicial.json";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="mainTitle">Alma Bohemia Velas</p>
        <ItemListContainer items={items} saludo={"Bienvenidos"}/>
        <ItemDetailContainer items={itemsInicial} saludo={"Detalle del Producto"} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
