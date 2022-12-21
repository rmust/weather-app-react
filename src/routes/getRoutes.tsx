import { Navigate, Route, Routes } from "react-router-dom";
import Forecasts from "../components/Forecasts";
import Login from "../components/Login";
import { ROUTE } from "./constants";
import PrivateRoutes from "./PrivateRoutes";

export const getRoutes = () => (
  <Routes>
    <Route element={<PrivateRoutes />}>
      <Route index={true} path={ROUTE.Forecasts} element={<Forecasts />} />
    </Route>
    <Route path={ROUTE.Login} element={<Login />} />
    <Route
      path="*"
      element={<Navigate to={ROUTE.Forecasts} replace={true} />}
    />
  </Routes>
);
