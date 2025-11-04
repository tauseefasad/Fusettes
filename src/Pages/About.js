import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#f8f7f3] text-center px-6 py-16">
      <motion.h2
        className="text-5xl font-light mb-8 tracking-wider text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Story
      </motion.h2>
      <motion.p
        className="max-w-3xl text-lg leading-relaxed text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Fusettes Café began with a simple dream — to bring people together through
        coffee, comfort, and creativity. Every bean we brew and every pastry we bake
        carries our belief in connection, authenticity, and warmth. Whether you’re
        here for your morning espresso or an evening conversation, we invite you to
        slow down and savor the moment.
      </motion.p>
    </section>
  );
};

export default About;
