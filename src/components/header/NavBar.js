import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import "./navBar.css"


export const NavBar = ({ marca, links }) => {
  return (
    <header>
      
      <NavLink id="marca" to="/">
        {marca}
      </NavLink>

      <div id="navbarLinksBar" >
        {links.map((link, index) => {
          return (
            <nav>
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
