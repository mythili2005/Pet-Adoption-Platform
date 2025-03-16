import React from "react";
import logo from "../../assets/logo.png"; 
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="PetAdopt Logo" />
        <span>PetAdopt</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/adopt">Adopt</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">Login</a></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
