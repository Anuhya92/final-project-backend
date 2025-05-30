import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className="flex items-center justify-between bg-primary text-white px-8 h-16 shadow-md relative">
      {/* Logo */}
      <img
        src="/option1.jpg"
        alt="Logo"
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Links */}
      <div className="flex items-center space-x-8 text-lg" style={{ color: "#E5A000" }}>
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/webshop" className="hover:underline">Webshop</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      <div className="relative" ref={dropdownRef}>
          <button onClick={() => setOpen(!open)} className="hover:underline">
            About Us
          </button>
          {open && (
            <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-md p-2 z-50 w-56">
              <Link to="/about/philosophy" className="block px-2 py-1 hover:bg-yellow-400">Our Philosophy</Link>
              <Link to="/about/sustainability" className="block px-2 py-1 hover:bg-yellow-400">Sustainability Work</Link>
              <Link to="/about/service" className="block px-2 py-1 hover:bg-yellow-400">Service</Link>
              <Link to="/about/contact" className="block px-2 py-1 hover:bg-yellow-400">Contact Us</Link>
              <Link to="/about/team" className="block px-2 py-1 hover:bg-yellow-400">Team Behind the App</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
