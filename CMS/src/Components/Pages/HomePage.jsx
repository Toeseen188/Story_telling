import React from "react";
import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BgVideo from "../../assets/video/BgV.mp4";
import ExploreCategories from "./ExploreCategories";
import FeatureIntroduction from "./FeatureIntroduction.jsx";

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
              className="fw-bold display-4 text-white mb-2"
              style={{ color: "#084949" }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to Enchanted Tales
            </motion.p>

            <motion.p
              className="display-6 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              Where imagination knows no bounds
            </motion.p>
            
            <motion.p
              className="fs-5 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
            >
              Ready to escape reality? Step into a world of infinite possibilities.
            </motion.p>
          </div>

          <div className="d-flex justify-content-center">
            <motion.button
              type="button"
              onClick={() => navigate('/user/signup')}
              className="btn text-white mt-4 rounded-pill border"
              style={{ background: "#3f929a" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6 }}
            >
              Dive into stories <MdArrowForward />
            </motion.button>
          </div>
        </div>
      </div>

      <FeatureIntroduction />
      <ExploreCategories/>
    </>
  );
};

export default HomePage;
