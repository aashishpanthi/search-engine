import styles from "./content.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Content = () => {
  const [result, setResult] = useState({
    title: "Aashish Panthi",
    description:
      "Very passionate about web and app development. An aspiring developer who loves learning and sharing that knowledge as open source.",
    link: "https://aashishpanthi.info.np",
    favicon: "https://aashishpanthi.info.np/img/thumbnail.ico",
    ogImage:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--nlsMuist--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/515453/9685da9d-4c14-4944-822d-6e3bc7ea969d.jpg",
  });

  return (
    <div className={styles.container}>
      <div className={styles.og}>
        <img src={result.ogImage} alt="ogimage"></img>
      </div>
      <div className={styles.data}>
        <div className={styles.info}>{result.title}</div>
        <div className={styles.link}>
        <img src={result.favicon} alt="fav"></img>
          <a href={result.link}>{result.link}</a>
        </div>
        <div className={styles.txt}>{result.description}</div>
      </div>
    </div>
  );
};

export default Content;
