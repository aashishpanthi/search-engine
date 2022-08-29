import styles from "./styles/searchresult.module.css";
import { Content, Page } from "../components";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchResults = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  if (!query) {
    navigate("/");
  }

  const fetchResult = async () => {
    // get using axios
    const { data } = await axios.get(`/api/search/${query}`);
    setData(data);
  };

  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    const data = localStorage.getItem("theme");
    setTheme(JSON.parse(data));

    fetchResult();
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Page title="Search Results">
      <div className={styles.container}>
        <div className={styles.sidenav}>
          <Link to={`/search?q=${query}`}>
            <button className={styles.btn}>All</button>
          </Link>
          <Link to={`/search/images?q=${query}`}>
            <button className={styles.btn}>Images</button>
          </Link>
          {/* <button className={styles.btn}>Videos</button> */}
        </div>
        <div className={styles.result}>
          {data.map((result) => {
            return <Content key={result.entityId} result={result} />;
          })}
        </div>
      </div>
    </Page>
  );
};

export default SearchResults;
