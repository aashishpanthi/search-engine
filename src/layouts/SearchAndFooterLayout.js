import { SearchBox, Footer } from "../components";
import SearchResults from "../pages/SearchResults";

const SearchAndFooterLayout = () => (
  <>
  <div className='srch'>
    <SearchBox />
    <SearchResults />
    </div>
    <Footer />
    
    </>
);

export default SearchAndFooterLayout;
