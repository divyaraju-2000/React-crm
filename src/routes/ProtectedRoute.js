import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
// eslint-disable-next-line
export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};