import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";

function NavBar()  {
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg navbar-light bg-light"
      id="navbarId"
    >
      <a className="navbar-brand" href="./index.html">
        Alma Bohemia
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <a className="nav-link" href="./index.html">
          Velas
        </a>
        <a className="nav-link" href="./index.html">
          Esencias
        </a>
        <a className="nav-link" href="./index.html">
          Jabones
        </a>
    <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
