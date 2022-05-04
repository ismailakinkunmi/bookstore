import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    {
      id: 1,
      path: "/",
      text: "BOOKS",
    },
    {
      id: 2,
      path: "/categories",
      text: "CATEGORIES",
    },
  ];
  return (
    <nav className="navbar">
      <h1>Bookstore CMS</h1>
      <ul>
        {links.map((link) => (
          <div key={link.id}>
            <Link to={link.path}>
              <li>{link.text}</li>
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
