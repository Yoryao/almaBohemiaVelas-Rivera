import logo from "./candletitle.svg";
import "./App.css";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/main/ItemListContainer";

function App() {
  const accesos = [
    { href: "#", name: "Clientes" },
    { href: "#", name: "Distribuidores" },
    { href: "#", name: "Mayoristas" },
    { href: "#", name: "Proveedores" },
  ];

  return (
    <div className="App">
      <NavBar />
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="mainTitle">Alma Bohemia Velas</p>
        <ItemListContainer action={"Usuarios"} links={accesos}/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
