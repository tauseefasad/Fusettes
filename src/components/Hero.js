import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/hero.mp4";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Animated text overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }} // <-- slow fade in over 3 seconds
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.5 }} // slow fade-in
          className="text-5xl md:text-7xl font-light tracking-wide mb-4"
        >
          Fusettes
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Hero;
