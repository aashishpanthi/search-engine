// routes
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import Router from "./routes";
import { useState, useEffect } from "react";
const App = () => {
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    const data = localStorage.getItem("theme");
      setTheme(JSON.parse(data));
  }, []);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  library.add(fas, faFontAwesome);
  return <Router />;
};

export default App;
