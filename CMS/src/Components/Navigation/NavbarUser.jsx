import React from 'react'
// import { Link } from 'react-router-dom';
import { BookOpen, BookMarked, Library, User, LogOut } from 'lucide-react';
import { useAuth } from '../Context/AuthContext';

const NavbarUser = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">StoryHub</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <a href="/library" className="flex items-center px-3 py-2 text-gray-600 hover:text-indigo-600">
                <Library className="h-5 w-5 mr-1" />
                <span>Library</span>
              </a>
              <a href="/bookmarks" className="flex items-center px-3 py-2 text-gray-600 hover:text-indigo-600">
                <BookMarked className="h-5 w-5 mr-1" />
                <span>Bookmarks</span>
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-2">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-gray-700">{user?.name}</span>
              </button>
              
              <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl hidden group-hover:block">
                <a href="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </a>
                <button
                  onClick={logout}
                  className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarUser;