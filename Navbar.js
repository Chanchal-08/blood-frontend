import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register as Donor</Link></li>
        <li><Link to="/donors">View Donors</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


