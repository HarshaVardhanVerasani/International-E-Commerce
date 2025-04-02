import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("../../pages/customer/homePage/HomePage"));

const CustomerRoutes = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};
export default CustomerRoutes;
