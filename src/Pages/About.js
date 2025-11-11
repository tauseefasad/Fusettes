import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/aboutus.png"; // make sure the path is correct

const About = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <motion.div className="relative z-10 max-w-3xl">
        <motion.h2
          className="text-5xl font-light mb-8 tracking-wider text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Story
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Fusettes began with a simple dream — to bring people together through
          coffee, comfort, and creativity. Every bean we brew and every pastry we bake
          carries our belief in connection, authenticity, and warmth. Whether you’re
          here for your morning espresso, study session, or an evening conversation, we invite you to
          slow down and savor the moment.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
