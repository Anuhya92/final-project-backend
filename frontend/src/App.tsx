import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';



const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div>
      <About />
      <Landing />
      <Footer />
      <Navbar />

      
    </div>
    </BrowserRouter>
  );
};

export default App;
