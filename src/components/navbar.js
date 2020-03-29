import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => (
  <header className="navbar">
    <h1 className="title">Stranger than Fiction</h1>
    <nav className="nav">
      <Link to="/potd" className="link">
        Photo of the Day
      </Link>
      <Link to="/mars" className="link">
        Mars
      </Link>
    </nav>
  </header>
);
export default NavBar;
