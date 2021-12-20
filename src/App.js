import logo from "./candletitle.svg";
import "./App.css";
import NavBar from "./components/header/NavBar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/main/ItemListContainer";
import items from "./items.json";
//import itemInicial from "./itemInicial.json";
import ItemDetailContainer from "./components/main/ItemDetailContainer";

function App() {

  return (
    <div className="App">
      <NavBar />
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="mainTitle">Alma Bohemia Velas</p>
        <ItemListContainer items={items} />
        <ItemDetailContainer/>
      </main>

      <Footer />
    </div>
  );
}

//inicial={inicial}

export default App;
