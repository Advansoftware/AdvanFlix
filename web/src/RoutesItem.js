import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AuthGuard from "./components/AuthGuard";
import SplashScreen from "./components/SplashScreen";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<SplashScreen />}>
      <Component {...props} />
    </Suspense>
  );
const Login = Loadable(React.lazy(() => import("./pages/login/Login")));

const RoutesItem = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <AuthGuard>
              <Home />
            </AuthGuard>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesItem;
