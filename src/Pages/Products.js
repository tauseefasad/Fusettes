import React from "react";
import { motion } from "framer-motion";

const suppliers = [
  {
    name: "Dear Grain Bakery - Classic Collection",
    type: "Bakery",
    description: "Freshly baked artisan breads and pastries.",
    image: "/assets/dear-grain1.jpg",
  },
  {
    name: "Dear Grain Bakery - Seasonal Collection",
    type: "Bakery",
    description: "Seasonal treats and pastries for every occasion.",
    image: "/assets/dear-grain2.jpg",
  },
  {
    name: "Detour Coffee Roasters - House Blend",
    type: "Coffee Beans",
    description: "Rich and smooth medium roast for espresso and filter.",
    image: "/assets/detour1.jpg",
  },
  {
    name: "Detour Coffee Roasters - Dark Roast",
    type: "Coffee Beans",
    description: "Bold, full-bodied coffee with chocolate notes.",
    image: "/assets/detour2.jpg",
  },
  {
    name: "Dear Grain Bakery - Vegan Collection",
    type: "Bakery",
    description: "Delicious vegan-friendly pastries and breads.",
    image: "/assets/dear-grain3.jpg",
  },
  {
    name: "Detour Coffee Roasters - Decaf",
    type: "Coffee Beans",
    description: "Smooth decaf option without sacrificing flavor.",
    image: "/assets/detour3.jpg",
  },
  {
    name: "Local Fruit Supplier",
    type: "Produce",
    description: "Seasonal fresh fruits for drinks and desserts.",
    image: "/assets/fruit.jpg",
  },
  {
    name: "Local Milk Supplier",
    type: "Dairy",
    description: "High-quality milk for coffees and lattes.",
    image: "/assets/milk.jpg",
  },
  {
    name: "Chocolate Co.",
    type: "Chocolate",
    description: "Premium chocolate for desserts and drinks.",
    image: "/assets/chocolate.jpg",
  },
  {
    name: "Honey Farm",
    type: "Condiments",
    description: "Organic honey for sweetening drinks and pastries.",
    image: "/assets/honey.jpg",
  },
];

const Products = () => {
  return (
    <div className="pt-16 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-beige/10">
      {suppliers.map((supplier, index) => (
        <motion.section
          key={index}
          className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 snap-start bg-white rounded-2xl shadow-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          <img
            src={supplier.image}
            alt={supplier.name}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-6 md:mb-0 md:mr-12"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-burgundy mb-2">
              {supplier.name}
            </h2>
            <h3 className="text-lg text-gray-500 mb-3">{supplier.type}</h3>
            <p className="text-gray-700 text-lg max-w-xl">{supplier.description}</p>
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default Products;
