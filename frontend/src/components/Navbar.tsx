import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-primary text-white px-8 h-16 shadow-md relative">
      {/* Logo */}
      <img
        src="/option1.jpg"
        alt="Logo"
        className="w-12 h-12 rounded-full object-cover"
      />

      {/* Links */}
      <div className="flex items-center space-x-8 text-lg" style={{ color: '#E5A000' }}>
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>

        {/* Dropdown for about us section*/}
        <div className="relative">
          <button onClick={() => setOpen(!open)} className="hover:underline">
            About Us ▼
          </button>
          {open && (
            <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-md p-2 z-50 w-56">
              <Link to="/about" onClick={() => setOpen(false)} className="block px-2 py-1 hover:bg-yellow-400">Overview</Link>
              <Link to="/about/philosophy" onClick={() => setOpen(false)} className="block px-2 py-1 hover:bg-yellow-400">Our Philosophy</Link>
              <Link to="/about/sustainability" onClick={() => setOpen(false)} className="block px-2 py-1 hover:bg-yellow-400">Sustainability Work</Link>
              <Link to="/about/service" onClick={() => setOpen(false)} className="block px-2 py-1 hover:bg-yellow-400">Service</Link>

              <Link to="/about/contact" onClick={() => setOpen(false)} className="block px-2 py-1 hover:bg-yellow-400">Contact Us</Link>
              <Link to="/about/team" onClick={() => setOpen(false)} className="block px-2 py-1 hover:bg-yellow-400">Team Behind the App</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




