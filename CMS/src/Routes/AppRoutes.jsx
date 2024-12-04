import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Components/Layouts/Layout';
import UserLayout from '../Components/Layouts/UserLayout';
import { useAuth } from '../Components/Context/AuthContext';

// Pages
import HomePage from '../Components/Pages/Home/HomePage';
import FeaturedBooks from '../Components/Pages/UserDashboard/FeaturedBooks';
import GenreSection from '../Components/Pages/UserDashboard/GenreSection';
import RecentlyViewed from '../Components/Pages/UserDashboard/RecentlyViewed';
import Signup from '../Components/Auth/Signup';
import Login from '../Components/Auth/Login';
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
  const { isAuthenticated } = useAuth();

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
        <Route
          index
          element={
            isAuthenticated ? <FeaturedBooks /> : <HomePage />
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <div>
                <FeaturedBooks />
                <GenreSection />
                <RecentlyViewed />
              </div>
            </ProtectedRoute>
          }
        />
        <Route
          path="library"
          element={
            <ProtectedRoute>
              <FeaturedBooks />
            </ProtectedRoute>
          }
        />
        <Route
          path="bookmarks"
          element={
            <ProtectedRoute>
              <RecentlyViewed />
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
