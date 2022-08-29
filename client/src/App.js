// routes
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCommentsDollar, fas } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import Router from "./routes";

const App = () => {
  library.add(fas, faFontAwesome);
  return <Router />;
};

export default App;
