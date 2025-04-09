import { Route, Routes } from "react-router-dom";

import ProductListingPage from "../../components/clothing/ProductListingPage";
import FavoritePage from "../../components/favorite/FavoritePage";
import Layout from "../../components/layout/Layout";
import AuthenticationLayout from "../../pages/authenticationLayout/AuthenticationLayout";
import ShoppingBag from "../../pages/customer/cart/Cart";
import HomePage from "../../pages/customer/homePage/HomePage";
import PlanYourVisitPage from "../../pages/customer/planYourVisit/PlanYourVisit";
import LoginPage from "../../pages/loginPage/LoginPage";
import ProductDetails from "../../pages/productDetails/ProductDetails";
import Register from "../../pages/register/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="women-clothing" element={<ProductListingPage />} />
        <Route index element={<HomePage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="cart" element={<ShoppingBag />} />
        <Route path="visit" element={<PlanYourVisitPage />} />
        <Route path="productDetails/:id" element={<ProductDetails />} />
      </Route>

      <Route path="/auth" element={<AuthenticationLayout />}>
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="Register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
