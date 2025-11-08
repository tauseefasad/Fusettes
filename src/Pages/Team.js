import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Max Aga",
    bio: "Owner",
    image: "/assets/alice.jpg",
  },
  {
    name: "Cagla Arlsan",
    bio: "Team Lead",
    image: "/assets/bob.jpg",
  },
  {
    name: "Seef Asad",
    bio: "Team Lead",
    image: "/assets/catherine.jpg",
  }
];

const Team = () => {
  return (
    <div className="pt-16 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-beige/10">
      {teamMembers.map((member, index) => (
        <motion.section
          key={index}
          className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-white mb-8 rounded-2xl shadow-lg snap-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.3 }}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-6 md:mb-0 md:mr-12"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-burgundy mb-3">
              {member.name}
            </h2>
            <p className="text-gray-700 text-lg max-w-xl">{member.bio}</p>
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default Team;
