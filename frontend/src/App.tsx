<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AboutSection from "./pages/AboutSection";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/:section" element={<AboutSection />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
=======
import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';

import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';



const App: React.FC = () => {
 
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    );
>>>>>>> a082947708db96ca586bda724db0b725c843103b
};

export default App;
