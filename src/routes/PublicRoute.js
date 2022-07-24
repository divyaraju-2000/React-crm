
import { Navigate } from "../../node_modules/react-router/index";
import { useAuth } from "./AuthProvider";

export const PublicRoute = ({children }) => {
    const value = useAuth()
    console.log(value)
    return value.user
        ? (<Navigate to="/dashboard" />):
        children
};