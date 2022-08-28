import { Outlet } from "react-router-dom";
import { SearchBox, Footer } from "../components";

const SearchAndFooterLayout = () => (
  <>
    <div className="srch">
      <SearchBox />
      <Outlet />
    </div>
    <Footer />
  </>
);

export default SearchAndFooterLayout;
