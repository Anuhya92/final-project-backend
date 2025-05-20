import React from 'react';
import './index.css';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
>>>>>>> 1e0301c (adding welcome user massage)

import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';


<<<<<<< HEAD

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
=======
const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/:section" element={<AboutSection />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
>>>>>>> 1e0301c (adding welcome user massage)
};

export default App;
