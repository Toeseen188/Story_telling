import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants"; 

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
            className="fw-bold display-4 mb-3"
          >
            Introducing Personalized Story Recommendations
          </motion.h2>
          
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5}} 
          >
            Discover stories that match your unique taste! Our new recommendation engine suggests books, 
            articles, and stories based on your reading preferences. Get personalized suggestions and never 
            run out of things to read.
          </motion.p>
          
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }} 
          >
            <a href="/explore" className=" btn-lg mt-2 btn text-white mt-4 rounded-pill border-none" style={{background:' #ed9e59 '}}>
              Explore Recommendations
            </a>
          </motion.div>
        </div>
                <div className="col-md-6 text-center mt-5 mt-md-0">
          <motion.img
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 1.4 }}
            src="https://via.placeholder.com/400x300" 
            alt="Feature Illustration"
            className="img-fluid rounded-3 shadow-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureIntroduction;
