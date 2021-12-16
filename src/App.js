import logo from "./candletitle.svg";
import "./App.css";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemCount from "./components/section/ItemCount";
import items from "./items.json";

function App() {
  const accesos = [
    { href: "#", name: "Velas" },
    { href: "#", name: "Fragancias" },
    { href: "#", name: "Escencias" },
    { href: "#", name: "Velones" },
    { href: "#", name: "Jabones" },

  ];

  function onAdd() {
    //este console log cambiarlo por un toastfy
console.log(`Se agrego al carrito las unidades.`)
  }

  return (
    <div className="App">
      <NavBar />
        <main className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p id="mainTitle">Alma Bohemia Velas</p>
            <ItemListContainer items={items} />
            {/* <ItemCount stock={12} initial={5} onAdd={onAdd}/> */}
        </main>

      <Footer />
    </div>
  );
}

export default App;
