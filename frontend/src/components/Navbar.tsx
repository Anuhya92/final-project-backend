import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="flex items-center justify-between bg-primary text-white px-8 h-16 shadow-md">
    {/* Logo on the left */}
    <img
      src="/option1.jpg"
      alt="Logo"
      className="w-12 h-12 rounded-full object-cover"
    />
    {/* Links on the right */}
    <div className="flex items-center space-x-8 text-lg text-yellow-400">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/register" className="hover:underline">Register</Link>
    </div>
  </nav>
);

export default Navbar;