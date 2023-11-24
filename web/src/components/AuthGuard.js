import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const AuthGuard = ({ children }) => {
  const { token, userId } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token || !userId) {
      navigate("/login");
    }
  }, [navigate, token, userId]);
  if (!token) return null;
  return <>{children}</>;
};

export default AuthGuard;
