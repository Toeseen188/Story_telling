import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../Utils/variants';

const CategoryCard = ({ category, index }) => {
  if (!category) return null;
  
  return (
    <motion.div
  className="col card-container"
  variants={fadeIn("up", 0.5 + index * 0.1)}
  initial="hidden"
  whileInView="show"
>
  <div className="card shadow-sm">
    <img
      src={category.image}
      className="card-img-top"
      alt={category.title}
      style={{ height: '180px', objectFit: 'cover' }}
    />
    <div className="card-body">
      <span className="badge bg-light text-dark border mb-3">
        {category.badge}
      </span>
      <h5 className="card-title">{category.title}</h5>
      <p className="card-text">{category.description}</p>
      <Link
        to={category.path}
        className="btn btn-primary mt-auto"
        style={{ backgroundColor: '#274d60', borderColor: '#274d60' }}
      >
        Explore Now
      </Link>
    </div>
  </div>
</motion.div>

  );
};

export default CategoryCard;