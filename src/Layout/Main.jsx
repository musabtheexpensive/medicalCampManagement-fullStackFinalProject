import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Main = () => {
  const locaton = useLocation();
  const noHeaderFooter =
    location.pathname.includes("availableCamp") ||
    location.pathname.includes("availableDetails") 
    // location.pathname.includes("login") ||
    // location.pathname.includes("register");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
