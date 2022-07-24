
import { Navigate } from "../../node_modules/react-router/index";
import { useAuth } from "./AuthProvider";
// eslint-disable-next-line
export const PublicRoute = ({children }) => {
    const value = useAuth()
    console.log(value)
    return value.user
        ? (<Navigate to="/dashboard" />):
        children
};