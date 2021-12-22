//import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";
import { Link , NavLink} from "react-router-dom"

export const NavBar = ({ marca , links }) => {
  return (
    <header>
      <NavLink className="navbar-brand" to="./index.html">
        {marca}
      </NavLink>
      
      <nav>
        {links.map((link, index) => {
          return <Link key={link.id} to={link.href}>{link.nombre}</Link>;
        })}
        <NavLink to={"/cart"}>
        <CartWidget />
        </NavLink>
      </nav>
    
    </header>
  );
};

export default NavBar;
