import React from 'react';
import CommunityFeature from './CommunityFeature';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from "../../../variants"; 

const CommunitySection = () => {
  const navigate=useNavigate()
  const features = [
    {
      title: "Read, listen, and interact with our stories",
      description: "Immerse yourself in captivating tales available in multiple formats.",
      icon: "📖",
    },
    {
      title: "Share your own tales and become a legendary author",
      description: "Write your stories and inspire a global audience.",
      icon: "✍️",
    },
    {
      title: "Connect with fellow bookworms and fandom fanatics",
      description: "Join discussions, create fandoms, and celebrate your favorite genres.",
      icon: "🤝",
    },
  ];

  return (
    <section className="community-section py-5 mt-5">
      <div className="container text-center">
        <motion.h2
         variants={fadeIn("down", 0.3)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7}}
        className="mb-4  text-secondary">Join the Enchanted Tale Community</motion.h2>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <CommunityFeature 
                title={feature.title} 
                description={feature.description} 
               icon={feature.icon}  
                
              />
            </div>
          ))}
        </div>
      </div>
      <motion.button
       variants={fadeIn("down", 0.3)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.7}}
      onClick={()=>navigate('/user/signup')} className="btn-lg mt-2 btn text-white mt-4 px-4 rounded-pill border-none" style={{background:' #274d60'}}>Join Community</motion.button>
    </section>
  );
};

export default CommunitySection;
