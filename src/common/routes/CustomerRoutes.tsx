import { Route, Routes } from "react-router-dom";
import CartPage from "../../components/cartPage/CartPage";
import FavoritePage from "../../components/favorite/FavoritePage";
import Layout from "../../components/layout/Layout";
import AuthenticationLayout from "../../pages/authenticationLayout/AuthenticationLayout";
import HomePage from "../../pages/customer/homePage/HomePage";
import LoginPage from "../../pages/loginPage/LoginPage";
import Register from "../../pages/register/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>

      <Route path="/auth" element={<AuthenticationLayout />}>
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="Register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
