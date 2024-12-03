import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Layout from './Components/Layout'; 
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './Components/Pages/Home/HomePage'; 
import UserDashboard from './Components/Pages/UserDashboard'; 
import SplashScreen from './Components/SplashScreen/SplashScreen';
import UserLayout from './Components/UserLayout'; 
import Signup from './Components/Signup'; 
import Login from './Components/Login'; 
import Navbar from './Components/Navbar'; 
import ForgotPassword from './Components/Pages/Passwords/ForgotPassword';
import SetNewPassword from './Components/Pages/Passwords/SetNewPassword';
import ResetPassword from './Components/Pages/Passwords/ResetPassword';
import UserNavbar from './Components/UserNavbar';

const App = () => {
  const [splashEnded, setSplashEnded] = useState(false);

  const handleSplashEnd = () => {
    setSplashEnded(true); 
  };
  return (
    <>
      {!splashEnded ? (
        <SplashScreen onSplashEnd={handleSplashEnd} />
      ) : (
        <div>

          {/* Main layout routes */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<HomePage />} />  
              <Route path="dashboard" element={<UserDashboard />} /> 
              <Route path="userNavbar" element={<UserNavbar/>} /> 
            </Route>

            {/* User-related routes */}
            <Route path="/user" element={<UserLayout />}>
              <Route 
                path="signup" 
                element={<Signup/>} 
              />  
              <Route 
                path="login" 
                element={<Login/>} 
              />  
              <Route 
                path="forgotPassword" 
                element={<ForgotPassword/>} 
              />  
                <Route 
                  path="resetPassword" 
                  element={<ResetPassword/>} 
                />  
              <Route 
                path="setNewPassword" 
                element={<SetNewPassword/>} 
              />  
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
