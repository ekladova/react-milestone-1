import React from "react";
import "./header.css";

let navLinks = [
  {
    name: "Home",
    key: "#homepage",
  },
  {
    name: "About",
    key: "#about",
  },
  {
    name: "Contact",
    key: "#contact",
  },
];

const Header = () => {
  return (
    <header className="nav-bar">
      <ul className="nav-list">
        {navLinks.map((link) => (
          <li className="nav-list-items">
            <a className="nav-links" href={link.key}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
