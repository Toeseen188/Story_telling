import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Logo and About */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Enchanted Tale</h5>
            <p>
              Dive into a world of imagination. Explore, create, and share captivating stories that inspire and entertain.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="#about" className="text-light text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link href="#browse" className="text-light text-decoration-none">
                  Browse Stories
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-light text-decoration-none">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-light text-decoration-none">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <div>
              <Link
                href="https://facebook.com"
                className="text-light me-3"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-light me-3"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-light me-3"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-light"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-secondary" />
        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Enchanted Tale. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
