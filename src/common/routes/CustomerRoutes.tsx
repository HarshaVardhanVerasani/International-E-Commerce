import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const AuthenticationLayout = lazy(() => import("../../pages/authenticationLayout/AuthenticationLayout"));
const HomePage = lazy(() => import("../../pages/customer/homePage/HomePage"));
const LoginPage = lazy(() => import('./../../pages/loginPage/LoginPage')) ;
const Register = lazy(() => import("../../pages/register/Register"));

const CustomerRoutes = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={<AuthenticationLayout />} >
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default CustomerRoutes;
