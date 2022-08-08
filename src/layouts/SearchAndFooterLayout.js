import { SearchBox, Footer } from "../components";
import { Outlet } from "react-router-dom";

const SearchAndFooterLayout = () => (
  <>
    <SearchBox />
    <Outlet />
    <Footer />
  </>
);

export default SearchAndFooterLayout;
