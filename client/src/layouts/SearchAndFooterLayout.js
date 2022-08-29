import { Outlet, useSearchParams, useNavigate, Link } from "react-router-dom";
import { SearchBox, Footer } from "../components";

const SearchAndFooterLayout = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  if (!query) {
    navigate("/");
  }

  return (
    <>
      <div className="srch">
        <div className="nav_with_search">
          <Link to="/" className="img_link">
            <img src="/logo192.png" />
          </Link>
          <SearchBox value={query} />
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default SearchAndFooterLayout;
