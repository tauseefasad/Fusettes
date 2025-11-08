import React from "react";
import { motion } from "framer-motion";
import menuImage from "../assets/menu.png";

const Menu = () => {
  const handleMenuClick = () => {
    window.open(menuImage, "_blank"); // Opens the menu.png in a new tab
  };

  return (
    <div className="pt-16 min-h-screen flex flex-col items-center justify-center bg-beige text-navy px-6">
      {/* Caption Section */}
      <motion.section
        className="w-full flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Discover our selection of handcrafted drinks and pastries.
        </p>

        {/* Menu Button */}
        <button
          onClick={handleMenuClick}
          className="bg-navy text-beige font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
        >
          View Full Menu
        </button>
      </motion.section>
    </div>
  );
};

export default Menu;
