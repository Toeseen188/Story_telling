import React from "react";
import { Link } from "react-router-dom";  
import { motion } from "framer-motion";
import { fadeIn } from "../../variants"; 
import Romance from '../../assets/couple1.jpg'
import Adventure from '../../assets/Adventure2.jpg'
import Mystery from '../../assets/A&S2.jpg'
import Fantasy from '../../assets/fantasy1.jpg'

const ExploreCategories = () => {
  const cardStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    minHeight: "250px",
    borderRadius: "10px",
  };

  const cardBodyStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    padding: "1rem",
  };

  const imageStyle = {
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
  };

  return (
    <div className="container-fluid p-5">
      <motion.h3
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center text-secondary-emphasis mb-5"
      >
        Explore Our Realm: Categories to Ignite Your Imagination
      </motion.h3>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {/* Romance Category */}
        <motion.div
          className="col"
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <div className="card" style={cardStyle}>
            <img
              src={Romance}
              className="card-img-top"
              alt="Romance"
              style={imageStyle}
            />
            <div className="card-body" style={cardBodyStyle}>
              <span className="badge mb-3" style={{ background: "#3f929a" }}>
                Romance
              </span>
              <h5 className="card-title fw-bold mb-0 text-center">Romantic Escapes</h5>
              <p className="card-text mb-2 text-center">Swoon-worthy love stories to make you blush</p>
              <Link
                to="/romance"
                className="btn text-white text-decoration-none mt-2"
                style={{ background: "#3f929a" }}
              >
                Explore Now
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Adventure Category */}
        <motion.div
          className="col"
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView="show"
        >
          <div className="card" style={cardStyle}>
            <img
              src={Adventure}
              className="card-img-top"
              alt="Adventure"
              style={imageStyle}
            />
            <div className="card-body" style={cardBodyStyle}>
              <span className="badge mb-3"  style={{ background: "#3f929a" }}>
                Adventure
              </span>
              <h5 className="card-title fw-bold mb-0 text-center">Epic Quests</h5>
              <p className="card-text mb-2 text-center">Thrilling journeys to unknown lands</p>
              <Link
                to="/adventure"
                className="btn text-white text-decoration-none mt-2"
                 style={{ background: "#3f929a" }}
              >
                Explore Now
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Mystery Category */}
        <motion.div
          className="col"
          variants={fadeIn("down", 0.7)}
          initial="hidden"
          whileInView="show"
        >
          <div className="card" style={cardStyle}>
            <img
              src={Mystery}
              className="card-img-top"
              alt="Mystery"
              style={imageStyle}
            />
            <div className="card-body" style={cardBodyStyle}>
              <span className="badge mb-3 "  style={{ background: "#3f929a" }}>
                Mystery
              </span>
              <h5 className="card-title fw-bold mb-0 text-center">Unsolved Mysteries</h5>
              <p className="card-text mb-2 text-center">Whodunits to keep you guessing</p>
              <Link
                to="/mystery"
                className="btn text-white text-decoration-none mt-2"
                style={{ background: "#3f929a" }}              >
                Explore Now
              </Link>
            </div>
          </div>
        </motion.div>

        {/* fantasy Category */}
        <motion.div
          className="col"
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView="show"
        >
          <div className="card" style={cardStyle}>
            <img
              src={Fantasy}
              className="card-img-top"
              alt="Comedy"
              style={imageStyle}
            />
            <div className="card-body" style={cardBodyStyle}>
              <span className="badge mb-3"  style={{ background: "#3f929a" }}>
                Comedy
              </span>
              <h5 className="card-title fw-bold mb-0 text-center">Magical Realms</h5>
              <p className="card-text mb-2 text-center">Quests, magic, and mythical creatures</p>
              <Link
                to="/comedy"
                className="btn text-white text-decoration-none mt-2"
                style={{ background: "#3f929a" }}              >
                Explore Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreCategories;
