import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext.js";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(user);
  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  return children;
};