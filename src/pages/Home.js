import React from "react";
import { SearchBox } from "../components";
import styles from "./styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <SearchBox />
    </div>
  );
};

export default Home;
