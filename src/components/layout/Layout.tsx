import { Outlet } from "react-router-dom";
import Footer from "../../pages/customer/footer/Footer";
import Header from "../../pages/customer/homePage/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
