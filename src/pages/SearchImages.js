import React from "react";
import styles from "./styles/searchimage.module.css";
import { Link } from "react-router-dom";
import { SearchBox, Footer } from "../components";
const Images = () => {
  return (
    <>
      <div className="srch">
        <SearchBox />
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Images;
