import React from "react";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <ul className="navbar-nav ml-auto menu">
      {props.items.map((menuItem, i) => {
        if (menuItem.submenu !== undefined) {
          return (
            <li key={i} title={menuItem.title} className="mx-2">
              <a className="dropdown-toggle" href="#">
                {menuItem.title}
              </a>
              <ul className="sub-menu">
                {menuItem.submenu.map((submenuItem, j) => (
                  <li key={j}>
                    <NavLink exact as={NavLink} to={submenuItem.link}>
                      {submenuItem.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          );
        } else {
          return (
            <li key={i} className="mx-2">
              <NavLink href="#" exact as={NavLink} to={menuItem.link}>
                {menuItem.title}
              </NavLink>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Menu;
