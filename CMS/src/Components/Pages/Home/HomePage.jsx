import React from "react";
import { MdArrowForward } from "react-icons/md";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../Utils/variants.jsx';
import { useNavigate } from 'react-router-dom';
import BgVideo from "../../../assets/video/BgV.mp4";
import ExploreCategories from "../Categories/ExploreCategories.jsx";
import FeatureIntroduction from "../FeatureIntroduction.jsx";
import CommunitySection from "../Community/CommunitySection.jsx";
import About from "../About.jsx";
import Footer from "../Footer.jsx";
import CategoryCard from "../Categories/CategoryCard.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center video-container"
      >
        {/* Video Background */}
        <video
          className="background-video "
          autoPlay
          muted
          loop
          playsInline
          src={BgVideo}
          type="video/mp4"
        />
        
        {/* Dark Overlay */}
        <div className="overlay"></div>

        {/* Content */}
        <div className="row w-100 text-center content mt-5 pt-3">
          <div className="col-12 ">
            <motion.p
              className="fw-bold display-4 text-white mb-2 "
              style={{ color: "#084949" }}
              variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
            >
              Welcome to Enchanted Tales
            </motion.p>

            <motion.p
              className="display-6 text-white"
              variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7}}
            >
              Where imagination knows no bounds
            </motion.p>
            
            <motion.p
              className="fs-5 text-white"
              variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
            >
              Ready to escape reality? Step into a world of infinite possibilities.
            </motion.p>
          </div>

          <div className="d-flex justify-content-center">
            <motion.button
              type="button"
              onClick={() => navigate('/user/signup')}
              className="btn text-white mt-4 rounded-pill border-none px-4 py-2 fs-5"
              style={{ background: "#274d60" }}
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Start your journey <MdArrowForward />
            </motion.button>
          </div>
        </div>
      </div>

      <FeatureIntroduction />
      <ExploreCategories/>
      <CategoryCard/>
      <About/>
      <CommunitySection/>
      <Footer/>
    </>
  );
};

export default HomePage;
