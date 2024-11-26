import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="img-fluid custom-logo" />
        </Link>

        {/* Toggle Button for Offcanvas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-dark" id="offcanvasNavbarLabel">
              Enchanted Tale
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav d-flex justify-content-center flex-grow-1">
              <li className="nav-item ms-auto">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link to="/browse" className="nav-link">
                  Browse Stories
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  href="#about"
                  className="nav-link"  
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('about')
                      .scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item ms-auto ">
                    <Link
                      to="/user/login"
                      className="nav-link login-link rounded-pill px-4 py-2 "
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/user/signup"
                      className="nav-link signup-link rounded-pill px-3 mt-1  "
                    >
                      Sign Up
                    </Link>
                  </li>
            </ul>        
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
