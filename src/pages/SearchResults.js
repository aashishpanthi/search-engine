import React from "react";
import styles from "./styles/searchresult.module.css";
import { Content } from "../components";
const SearchResults = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidenav}>
        <button className={styles.btn}>All</button>
        <button className={styles.btn}>Images</button>
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
