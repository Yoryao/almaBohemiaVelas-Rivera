import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import "./navBar.css"


export const NavBar = ({ marca, links }) => {
  return (
    <header>
      <NavLink className="navbar-brand" id="marca" to="/">
        {marca}
      </NavLink>

      <div id="navbarLinksBar" bg="primary" variant="dark">
        {links.map((link, index) => {
          return (
            <nav  className="me-auto">
              <NavLink key={index} className="link" to={link.href}>
                {link.nombre}
              </NavLink>
            </nav>
          );
        })}
      </div>

      <NavLink id="cartWidget" to={"/cart"}>
        <CartWidget />
      </NavLink>

    </header>
  );
};

export default NavBar;
