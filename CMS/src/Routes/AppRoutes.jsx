import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Components/Layouts/Layout';
import UserLayout from '../Components/Layouts/UserLayout';
import { useAuth } from '../Components/Context/AuthContext';

// Pages
import HomePage from '../Components/Pages/Home/HomePage';
import UserDashboard from '../Components/Pages/UserDashboard';
import Signup from '../Components/Signup';
import Login from '../Components/Login';
import ForgotPassword from '../Components/Pages/Passwords/ForgotPassword';
import SetNewPassword from '../Components/Pages/Passwords/SetNewPassword';
import ResetPassword from '../Components/Pages/Passwords/ResetPassword';
import NotFound from '../Components/Pages/Error/NotFound';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/user/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<Navigate to="/user/login" />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        <Route path="setNewPassword" element={<SetNewPassword />} />
      </Route>

      {/* Main Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Catch-all Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;