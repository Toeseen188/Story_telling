import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = (direction = "up", duration = 0.3) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : -20, 
    },
    show: {
      opacity: 1,
      y: 0, 
      transition: {
        duration: duration,
        type: "spring",
        stiffness: 100, 
      },
    },
  };
};

const CommunityFeature = ({ title, description, icon }) => {
  return (
    <motion.div
      className="community-feature"
      variants={fadeIn("up", 0.3)} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: false, amount: 0.7 }} 
    >
      <div className="icon text-center">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default CommunityFeature;
