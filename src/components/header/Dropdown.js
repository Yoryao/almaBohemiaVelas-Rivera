import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const MenuDropdown = ({ categorias }) => {
  const [menu, setMenu] = useState(false);

  const desplegar = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Dropdown isOpen={menu} toggle={desplegar}>
        <DropdownToggle>Categorias</DropdownToggle>
        <DropdownMenu>
          {categorias.map((categoria) => {
            return (
              <DropdownItem>
                <NavLink to={`/productos/${categoria.nombre}`}>
                  {categoria.nombre}
                </NavLink>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default MenuDropdown;
