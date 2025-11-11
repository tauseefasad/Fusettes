import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Products from "./Pages/Products";
import Careers from "./Pages/Careers";
import Team from "./Pages/Team";

// Import your logo (make sure file name and path are exact)
import logo from "./assets/logo 2.0.png";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000); // Start fade
    const timer = setTimeout(() => setLoading(false), 3000); // End loading
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div
        className={`flex items-center justify-center h-screen bg-black transition-opacity duration-700 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
<img
  src={logo}
  alt="Fusettes Logo"
  className={`w-[28rem] md:w-[36rem] h-auto transition-transform duration-700 ${
    fadeOut ? "scale-90 opacity-80" : "scale-100 opacity-100"
  }`}
/>
      </div>
    );
  }

  return (
    <Router>
      <div className="relative flex flex-col min-h-screen bg-beige">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
