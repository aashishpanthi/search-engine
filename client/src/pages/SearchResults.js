import React from "react";
import styles from "./styles/searchresult.module.css";
import { Content } from "../components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const SearchResults = () => {
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    const data = localStorage.getItem("theme");
      setTheme(JSON.parse(data));
       
  }, []);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={styles.container}>
      <div className={styles.sidenav}>
        <Link to="/search">
          <button className={styles.btn}>All</button>
        </Link>
        <Link to="/images">
          <button className={styles.btn}>Images</button>
        </Link>
        <button className={styles.btn}>Videos</button>
      </div>
      <div className={styles.result}>
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
};

export default SearchResults;
