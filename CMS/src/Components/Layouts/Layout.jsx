import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import NavbarUser from '../Navigation/NavbarUser';
import NavbarGuest from '../Navigation/NavbarGuest';

const Layout = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div>
      {isAuthenticated ? <NavbarUser /> : <NavbarGuest />}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;