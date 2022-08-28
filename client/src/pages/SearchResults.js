import styles from "./styles/searchresult.module.css";
import { Content, Page } from "../components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchResults = () => {
  const [theme, setTheme] = useState("light-theme");

  const data = [
    {
      id: 1,
      title: "Aashish Panthi",
      description:
        "Very passionate about web and app development. An aspiring developer who loves learning and sharing that knowledge as open source.",
      link: "https://aashishpanthi.info.np",
      favicon: "https://aashishpanthi.info.np/img/thumbnail.ico",
      ogImage:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--nlsMuist--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/515453/9685da9d-4c14-4944-822d-6e3bc7ea969d.jpg",
    },
    {
      id: 2,
      title: "Aashish Panthi",
      description:
        "Very passionate about web and app development. An aspiring developer who loves learning and sharing that knowledge as open source.",
      link: "https://aashishpanthi.info.np",
      favicon: "https://aashishpanthi.info.np/img/thumbnail.ico",
      ogImage:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--nlsMuist--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/515453/9685da9d-4c14-4944-822d-6e3bc7ea969d.jpg",
    },
    {
      id: 3,
      title: "Aashish Panthi",
      description:
        "Very passionate about web and app development. An aspiring developer who loves learning and sharing that knowledge as open source.",
      link: "https://aashishpanthi.info.np",
      favicon: "https://aashishpanthi.info.np/img/thumbnail.ico",
      ogImage:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--nlsMuist--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/515453/9685da9d-4c14-4944-822d-6e3bc7ea969d.jpg",
    },
    {
      id: 4,
      title: "Aashish Panthi",
      description:
        "Very passionate about web and app development. An aspiring developer who loves learning and sharing that knowledge as open source.",
      link: "https://aashishpanthi.info.np",
      favicon: "https://aashishpanthi.info.np/img/thumbnail.ico",
      ogImage:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--nlsMuist--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/515453/9685da9d-4c14-4944-822d-6e3bc7ea969d.jpg",
    },
    {
      id: 5,
      title: "Aashish Panthi",
      description:
        "Very passionate about web and app development. An aspiring developer who loves learning and sharing that knowledge as open source.",
      link: "https://aashishpanthi.info.np",
      favicon: "https://aashishpanthi.info.np/img/thumbnail.ico",
      ogImage:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--nlsMuist--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/515453/9685da9d-4c14-4944-822d-6e3bc7ea969d.jpg",
    },
  ];

  useEffect(() => {
    const data = localStorage.getItem("theme");
    setTheme(JSON.parse(data));
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Page title="Search Results">
      <div className={styles.container}>
        <div className={styles.sidenav}>
          <Link to="/search">
            <button className={styles.btn}>All</button>
          </Link>
          <Link to="/search/images">
            <button className={styles.btn}>Images</button>
          </Link>
          {/* <button className={styles.btn}>Videos</button> */}
        </div>
        <div className={styles.result}>
          {data.map((result) => {
            return <Content key={result.id} result={result} />;
          })}
        </div>
      </div>
    </Page>
  );
};

export default SearchResults;
