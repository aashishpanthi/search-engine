import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

const NavAndFoolterLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default NavAndFoolterLayout;
