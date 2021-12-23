import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css"


export const NavBar = ({ marca, links }) => {
  return (
    <header>
      <NavLink className="navbar-brand" id="marca" to="./index.html">
        {marca}
      </NavLink>

      <navbar id="navbarLinksBar" bg="primary" variant="dark">
        {links.map((link, index) => {
          return (
            <nav  className="me-auto">
              <NavLink id={link.id} id="link" to={link.href}>
                {link.nombre}
              </NavLink>
            </nav>
          );
        })}
      </navbar>

      <NavLink id="cartWidget" to={"/cart"}>
        <CartWidget />
      </NavLink>

    </header>
  );
};

export default NavBar;
