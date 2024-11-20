import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from './Components/Layout'; 
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './Components/Pages/HomePage'; 
import UserDashboard from './Components/Pages/UserDashboard'; 
import SplashScreen from './Components/SplashScreen/SplashScreen';
import UserLayout from './Components/UserLayout'; 
import Signup from './Components/Signup'; 
import Login from './Components/Login'; 
import Navbar from './Components/Navbar'; 
import UserProfile from './Components/Pages/UserProfile';

const App = () => {
  const [user, setUser] = useState(null);
  const [splashEnded, setSplashEnded] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleSplashEnd = () => {
    setSplashEnded(true); 
  };
  const isAuthPage = location.pathname === '/user/signup' || location.pathname === '/user/login';

  return (
    <>
      {!splashEnded ? (
        <SplashScreen onSplashEnd={handleSplashEnd} />
      ) : (
        <div>
          {!isAuthPage && <Navbar user={user} onLogout={handleLogout} />} 

          {/* Main layout routes */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<HomePage />} />  
              <Route path="dashboard" element={<UserDashboard />} /> 
              <Route path="Profile" element={<UserProfile />} /> 
            </Route>

            {/* User-related routes */}
            <Route path="/user" element={<UserLayout />}>
              <Route path="signup" element={<Signup setUser={setUser} />} />  
              <Route path="login" element={<Login setUser={setUser} />} />  
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
