import logo from "./candletitle.svg";
import "./App.css";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/main/ItemListContainer";
import ItemCount from "./components/section/ItemCount";

function App() {
  const accesos = [
    { href: "#", name: "Velas" },
    { href: "#", name: "Fragancias" },
    { href: "#", name: "Escencias" },
    { href: "#", name: "Velones" },
    { href: "#", name: "Jabones" },

  ];

  return (
    <div className="App">
      <NavBar />
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="mainTitle">Alma Bohemia Velas</p>
        <ItemListContainer action={"Usuarios"} links={accesos}/>
        <ItemCount />

      </main>

      <Footer />
    </div>
  );
}

export default App;
