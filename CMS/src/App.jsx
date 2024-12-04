import React, { useState } from 'react';
import AuthProvider from './Components/Context/AuthContext'; 
import AppRoutes from './Routes/AppRoutes';
import SplashScreen from './Components/SplashScreen/SplashScreen';

// Styles
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [splashEnded, setSplashEnded] = useState(false);

  const handleSplashEnd = () => {
    setSplashEnded(true);
  };

  return (
    <AuthProvider>
      {!splashEnded ? (
        <SplashScreen onSplashEnd={handleSplashEnd} />
      ) : (
        <div className="min-h-screen bg-gray-50">
          <AppRoutes />
        </div>
      )}
    </AuthProvider>
  );
};

export default App;
