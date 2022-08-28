import React from "react";
import { Page, SearchBox } from "../components";
import styles from "./styles/home.module.css";

const Home = () => {
  return (
    <Page title="Home">
      <div className={styles.container}>
        <img src="/logo512.png" alt="logo" className={styles.logo} />
        <SearchBox />
      </div>
    </Page>
  );
};

export default Home;
