import React from 'react';
import { useAuth } from '../Context/AuthContext';
import { NavbarGuest } from '../Navigation/NavbarGuest';
import { NavbarUser } from '../Navigation/NavbarUser';
const Navbar = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <NavbarUser /> : <NavbarGuest />;
}

export default Navbar