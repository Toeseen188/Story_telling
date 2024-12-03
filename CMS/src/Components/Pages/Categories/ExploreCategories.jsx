import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../Utils/variants';
import CategoryCard from './CategoryCard';
import { categories } from '../../../Data/Categories';

const ExploreCategories = () => {
  return (
    <div className="container-fluid py-5 px-4">
      <motion.h3
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center text-secondary mb-5"
      >
        Explore Our Realm: Categories to Ignite Your Imagination
      </motion.h3>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {categories.map((category, index) => (
          <CategoryCard 
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;