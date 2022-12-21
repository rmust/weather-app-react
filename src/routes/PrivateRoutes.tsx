import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const PrivateRoutes: FC = () => {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
