import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants"; 

const user = {
  name: "Jane Doe",
  bio: "A bookworm with a love for fantasy and mystery.",
  avatar: "https://via.placeholder.com/150", 
  recommendations: [
    { title: "The Dragon's Heart", genre: "Fantasy", image: "https://via.placeholder.com/100" },
    { title: "Love in the Stars", genre: "Romance", image: "https://via.placeholder.com/100" },
    { title: "Mystery at Midnight", genre: "Mystery", image: "https://via.placeholder.com/100" },
  ],
  recentlyRead: [
    { title: "The Magical Forest", genre: "Fantasy", image: "https://via.placeholder.com/100" },
    { title: "The Adventure Begins", genre: "Adventure", image: "https://via.placeholder.com/100" },
  ],
  favoriteGenres: ["Fantasy", "Mystery", "Romance"],
};

const UserProfile = () => {
  return (
    <div className="container py-5">
      {/* Profile Header */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="text-center mb-5"
      >
        <img 
          src={user.avatar} 
          alt="Profile Avatar" 
          className="rounded-circle mb-3" 
          style={{ width: '150px', height: '150px' }} 
        />
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </motion.div>

      {/* Personalized Recommendations */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        className="mb-5"
      >
        <h3 className="text-center mb-4">Personalized Story Recommendations</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {user.recommendations.map((story, index) => (
            <motion.div
              key={index}
              className="col"
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
            >
              <div className="card">
                <img src={story.image} className="card-img-top" alt={story.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{story.title}</h5>
                  <p className="card-text">{story.genre}</p>
                  <Link to={`/story/${story.title}`} className="btn btn-primary">
                    Read Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recently Read Stories */}
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
        className="mb-5"
      >
        <h3 className="text-center mb-4">Your Recently Read Stories</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {user.recentlyRead.map((story, index) => (
            <motion.div
              key={index}
              className="col"
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView="show"
            >
              <div className="card">
                <img src={story.image} className="card-img-top" alt={story.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{story.title}</h5>
                  <p className="card-text">{story.genre}</p>
                  <Link to={`/story/${story.title}`} className="btn btn-primary">
                    Continue Reading
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Favorite Genres Section */}
      <motion.div
        variants={fadeIn("up", 0.9)}
        initial="hidden"
        whileInView="show"
        className="text-center"
      >
        <h4>Your Favorite Genres</h4>
        <div className="d-flex justify-content-center">
          {user.favoriteGenres.map((genre, index) => (
            <span key={index} className="badge bg-primary mx-2">
              {genre}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Call to Action for More Recommendations */}
      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        whileInView="show"
        className="text-center mt-5"
      >
        <Link to="/explore" className="btn btn-lg btn-success">
          Explore More Recommendations
        </Link>
      </motion.div>
    </div>
  );
};

export default UserProfile;
