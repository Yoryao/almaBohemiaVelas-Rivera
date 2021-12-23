import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css"

export const NavBar = ({ marca, links }) => {
  return (
    <header>
      <NavLink className="navbar-brand" to="./index.html">
        {marca}
      </NavLink>

      <navbar bg="primary" variant="dark">
        {links.map((link, index) => {
          return (
            <nav className="me-auto">
              <NavLink id={link.id} to={link.href}>
                {link.nombre}
              </NavLink>
            </nav>
          );
        })}
      </navbar>

      <NavLink to={"/cart"}>
        <CartWidget />
      </NavLink>

    </header>
  );
};

export default NavBar;
