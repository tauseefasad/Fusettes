import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // replace with your actual logo file

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={logo}
        alt="Fusettes Logo"
        className="w-40 h-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
