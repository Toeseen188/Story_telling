import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/Context/AuthContext';

const useProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/user/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated; // Optional: Return authentication status
};

export default useProtectedRoute;
