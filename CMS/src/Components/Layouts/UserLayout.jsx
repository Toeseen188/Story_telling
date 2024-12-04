import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarGuest from '../Navigation/NavbarGuest';

const UserLayout = () => {
  return (
    <div>
      <NavbarGuest />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;