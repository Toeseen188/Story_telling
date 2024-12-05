import React from 'react';
import { Outlet } from 'react-router-dom';
// import NavbarGuest from '../Navigation/NavbarGuest';

const UserLayout = () => {
  return (
    <div>
      {/* Render the guest navbar */}
      {/* <NavbarGuest /> */}
      
      {/* Main content area */}
      <main className=" py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
