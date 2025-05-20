import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

import AboutUs from "./pages/AboutUs";
import AboutSection from "./pages/AboutSection";

const App = () => {
  return (
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
  );
};

export default App;
