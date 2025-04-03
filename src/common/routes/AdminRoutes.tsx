import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Dashboard = lazy(() => import("../../pages/admin/dashboard/Dashboard"));

const AdminRoutes = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default AdminRoutes;
