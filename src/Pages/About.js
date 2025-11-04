import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 py-20">
      <motion.h2
        className="text-4xl font-semibold mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Our Story
      </motion.h2>

      <motion.p
        className="max-w-2xl text-center text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Born from a love of great coffee and good company, Fusettes Café is
        where Toronto’s charm meets artisan flavors. Every cup is crafted with
        care — and every visit feels like home.
      </motion.p>
    </section>
  );
};

export default About;
