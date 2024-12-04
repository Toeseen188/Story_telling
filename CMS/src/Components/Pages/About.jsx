import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants"; 

const About = () => {
  return (
    <div id='about' className="container my-5 about-section">
      <div className="">
        <motion.h2
         variants={fadeIn("up", 0.3)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }}
        className="mb-4 text-center text-secondary ">

          About Enchanted Tales
        </motion.h2>

        <motion.p
         variants={fadeIn("up", 0.3)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }}
        className="mb-4 text-center text-secondary lead ">
          Welcome to Enchanted Tales, your gateway to boundless imagination and unforgettable adventures. Whether you're a seasoned storyteller or a devoted reader, our platform is designed to ignite your creativity and whisk you away to worlds beyond your wildest dreams.
        </motion.p>

      </div>
      <div className="mt-4 text-center">
        <motion.h3
         variants={fadeIn("up", 0.3)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7}} 
        className=" mb-3  text-secondary">At Enchanted Tales, you can:</motion.h3>
        <motion.ul 
         variants={fadeIn("up", 0.3)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }} 
        className="list-unstyled  text-secondary">
          <li className="mb-3">
            <b>Discover captivating tales</b> across genres like Fantasy, Romance, Mystery, Adventure, and more.
          </li>
          <li className="mb-3">
            <b>Create and share your own stories,</b> building your legacy as a legendary author.
          </li>
          <li className="mb-3">
            <b>Engage with a vibrant community</b> of readers and writers who share your passion for storytelling.
          </li>
        </motion.ul>

        <motion.p 
         variants={fadeIn("up", 0.3)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }} 
        className="text-center  text-secondary">
          From epic quests with dragons to heartfelt romances and spine-tingling mysteries, Enchanted Tales offers something for everyone. Let's turn the page together and make your storytelling journey unforgettable.
        </motion.p>

        <motion.p 
         variants={fadeIn("up", 0.3)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.7 }} 
        className="text-center  text-secondary">
          <b>Dive in today and let your imagination take flight!</b>
        </motion.p>
      </div>
    </div>
  );
};

export default About;
