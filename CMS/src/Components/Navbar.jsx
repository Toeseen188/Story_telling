import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="img-fluid w-25 custom-logo" />
        </Link>

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

        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              StorySphere
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav d-flex justify-content-center flex-grow-1 pe-3">
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/browse" className="nav-link">
                  Browse Stories
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>

            {/* Conditional rendering for logged-in users */}
            <ul className="navbar-nav ms-auto">
              {user ? (
                <>
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                      {user.name || 'Profile'}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={onLogout}
                      className="nav-link btn btn-link text-white"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to="/user/login"
                      className="nav-link login-link rounded-pill px-4"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/user/signup"
                      className="nav-link signup-link rounded-pill px-4"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
