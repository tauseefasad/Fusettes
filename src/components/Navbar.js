import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-beige/80 backdrop-blur-md text-navy z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-burgundy tracking-wide">Fusettes Café</h1>
        <div className="flex space-x-8 text-lg font-medium">
          <Link to="/" className="hover:text-golden transition-all">Home</Link>
          <Link to="/about" className="hover:text-golden transition-all">About</Link>
          <Link to="/menu" className="hover:text-golden transition-all">Menu</Link>
          <Link to="/team" className="hover:text-golden transition-all">Team</Link>
          <Link to="/products" className="hover:text-golden transition-all">Products</Link>
          <Link to="/careers" className="hover:text-golden transition-all">Careers</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
