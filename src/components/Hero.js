import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/hero.mp4";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          className="text-6xl font-light mb-4 tracking-wider"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Fusettes Café
        </motion.h1>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Where every sip feels like home.
        </motion.p>

        <motion.button
          className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Menu
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
