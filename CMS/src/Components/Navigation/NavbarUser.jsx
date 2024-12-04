import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BookMarked, Library, User, LogOut } from 'lucide-react';
import { useAuth } from '../Context/AuthContext';

const NavbarUser = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="ms-2 fs-4 fw-bold text-dark">Enchanted Tale</span>
        </Link>

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
              <Link className="nav-link d-flex align-items-center text-dark" to="/library">
                <Library className="h-5 w-5 me-2" />
                Library
              </Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center text-dark" to="/bookmarks">
                <BookMarked className="h-5 w-5 me-2" />
                Bookmarks
              </Link>
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
                <Link className="dropdown-item d-flex align-items-center" to="/profile">
                  <User className="h-4 w-4 me-2" />
                  Profile
                </Link>
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
