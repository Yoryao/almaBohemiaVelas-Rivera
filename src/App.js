import logo from './candletitle.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="mainTitle">
        Alma Bohemia Velas
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ingresar
        </a>
      </header>
    </div>
  );
}

export default App;
