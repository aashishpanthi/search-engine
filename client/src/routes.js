import { useRoutes } from "react-router-dom";

// layouts
import NavAndFooterLayout from "./layouts/NavAndFooterLayout";
import SearchAndFooterLayout from "./layouts/SearchAndFooterLayout";

//import other pages
import NotFound from "./pages/Page404";
import Home from "./pages/Home";
import Images from "./pages/SearchImages";
import SearchResults from "./pages/SearchResults";
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <NavAndFooterLayout />,
      children: [{ path: "", element: <Home /> }],
    },
    {
      path: "/search",
      element: <SearchAndFooterLayout />,
      children: [
        { path: "", element: <SearchResults /> },
        { path: "images", element: <Images /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
}
