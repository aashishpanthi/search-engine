import { Outlet } from "react-router-dom";
import { SearchBox, Footer } from "../components";
import { Link } from "react-router-dom";

const SearchAndFooterLayout = () => (
  <>
    <div className="srch">
      <div className="nav_with_search">
        <Link to="/" class="img_link">
          <img src="/logo192.png" />
        </Link>
        <SearchBox />
      </div>
      <Outlet />
    </div>
    <Footer />
  </>
);

export default SearchAndFooterLayout;
