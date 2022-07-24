import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import axios from "axios";
const AuthContext = createContext();
// eslint-disable-next-line
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    axios.post('http://localhost:4000/login/auth', data)
    .then(response =>  {
      setUser(response.data.token);
      navigate("/dashboard");
    })
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };
// eslint-disable-next-line
  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),// eslint-disable-next-line
    [user]// eslint-disable-next-line
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};