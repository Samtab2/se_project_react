import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, isLoggedInLoading }) {
  if (isLoggedInLoading) return null;
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
