import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import WebshopPage from "./pages/Webshop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import AboutSection from "./pages/AboutSection";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <UserProvider>
      <div className="min-h-screen flex flex-col">
        <Router>
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/webshop" element={<WebshopPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/about/:section" element={<AboutSection />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </UserProvider>
  );
};

export default App;
