import React from "react";
import styles from "./styles/searchimage.module.css";
import { Link } from "react-router-dom";
import { SearchBox, Footer } from "../components";
import { useState, useEffect } from "react";
const Images = () => {
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    const data = localStorage.getItem("theme");
      setTheme(JSON.parse(data));
       
  }, []);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
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
            <div className={styles.logocontain}>
              <div className={styles.image}>
                <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--nlsMuist--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/515453/9685da9d-4c14-4944-822d-6e3bc7ea969d.jpg' alt='logo'></img>
                
              </div>
              <div className={styles.info}>Aashish Panthi</div>
            </div>
            <div className={styles.covercontain}>
              <div className={styles.image}>
                <img src='https://keep-calm.net/images/keep-calm-and-digest-the-sample-1200-630-black-orange.jpg' alt='cover'></img>
                
              </div>
              <div className={styles.info}>Aashish Panthi</div>
            </div>
            <div className={styles.logocontain}>
              <div className={styles.image}>
                <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--nlsMuist--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/515453/9685da9d-4c14-4944-822d-6e3bc7ea969d.jpg' alt='logo'></img>
                
              </div>
              <div className={styles.info}>Aashish Panthi</div>
            </div>
            <div className={styles.covercontain}>
              <div className={styles.image}>
                <img src='https://keep-calm.net/images/keep-calm-and-digest-the-sample-1200-630-black-orange.jpg' alt='cover'></img>
                
              </div>
              <div className={styles.info}>Aashish Panthi</div>
            </div>  
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Images;
