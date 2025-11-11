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
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000); // Start fade
    const contentTimer = setTimeout(() => setShowContent(true), 2500); // Show content slightly before
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <Router>
      {/* Loading Screen - stays mounted during transition */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1000 ${
          fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
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

      {/* Main Content - fades in as loading screen fades out */}
      <div
        className={`relative flex flex-col min-h-screen bg-beige transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
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
