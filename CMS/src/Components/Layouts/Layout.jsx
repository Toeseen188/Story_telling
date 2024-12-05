import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import NavbarUser from '../Navigation/NavbarUser';
import NavbarGuest from '../Navigation/NavbarGuest';

const Layout = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div>
      {/* Render appropriate navbar based on authentication status */}
      {isAuthenticated ? <NavbarUser /> : <NavbarGuest />}

      {/* Main content area */}
      <main className=" py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
