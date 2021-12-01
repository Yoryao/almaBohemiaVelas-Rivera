import logo from './candletitle.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="mainTitle">
        Alma Bohemia Velas
        </p>
        <a
          className="App-link"
          href="./index.html"
          rel="noopener noreferrer"
        >
          Ingresar
        </a>
      </main>

<Footer/>
    </div>
  );
}

export default App;
