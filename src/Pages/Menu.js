import React from "react";
import { motion } from "framer-motion";
import menuImage from "../assets/menu.png";

const Menu = () => {
  return (
    <div className="pt-16 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <motion.section
        className="relative w-full h-screen flex items-center justify-center snap-start"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <img
          src={menuImage}
          alt="Cafe Menu"
          className="w-full h-full object-contain md:object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Optional content overlay */}
        <div className="absolute z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg md:text-xl">
            Discover our selection of handcrafted drinks and pastries.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Menu;
