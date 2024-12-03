import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants"; 
import Reading from '../../assets/story reading1.png'

const FeatureIntroduction = () => {
  return (
    <div className="container-fluid feature-intro-section py-5">
      <div className="row">
        <div className="col-md-6 text-center py-3">
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="fw-bold display-4 mb-3 text-secondary"
          >
            Introducing Personalized Story Recommendations
          </motion.h2>
          
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7}} 
            className='text-secondary lead'
          >
            Discover stories that match your unique taste! Our new recommendation engine suggests books, 
            articles, and stories based on your reading preferences. Get personalized suggestions and never 
            run out of things to read.
          </motion.p>
          
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }} 
          >
            <a href="/explore" className=" btn-lg mt-2 btn text-white mt-4 rounded-pill border-none" style={{background:' #274d60'}}>
              Explore Recommendations
            </a>
          </motion.div>
        </div>
            <div className="col-md-6 text-center  mt-md-0">
          <motion.img
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }} 
            src={Reading} 
            alt="Feature Illustration"
            className="img-fluid rounded-3 "
            style={{
              maxHeight: '400px', 
              objectFit: 'contain', 
              width: '100%' 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureIntroduction;
