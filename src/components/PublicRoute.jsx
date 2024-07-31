import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
