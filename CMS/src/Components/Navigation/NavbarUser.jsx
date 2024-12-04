import React from 'react';
// import { Link } from 'react-router-dom';
import { BookOpen, BookMarked, Library, User, LogOut } from 'lucide-react';
import { useAuth } from '../Context/AuthContext';

const NavbarUser = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="ms-2 fs-4 fw-bold text-dark">StoryHub</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center text-dark" href="/library">
                <Library className="h-5 w-5 me-2" />
                Library
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center text-dark" href="/bookmarks">
                <BookMarked className="h-5 w-5 me-2" />
                Bookmarks
              </a>
            </li>
          </ul>

          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle d-flex align-items-center"
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={user?.avatar}
                alt={user?.name}
                className="rounded-circle me-2"
                style={{ width: '32px', height: '32px' }}
              />
              <span className="text-dark">{user?.name}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li>
                <a className="dropdown-item d-flex align-items-center" href="/profile">
                  <User className="h-4 w-4 me-2" />
                  Profile
                </a>
              </li>
              <li>
                <button
                  className="dropdown-item d-flex align-items-center"
                  onClick={logout}
                >
                  <LogOut className="h-4 w-4 me-2" />
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
