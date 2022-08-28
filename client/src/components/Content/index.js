import styles from "./content.module.css";

const Content = ({ result }) => {
  return (
    <div className={styles.container}>
      <div className={styles.og}>
        <img src={result.ogImage} alt="ogimage"></img>
      </div>
      <div className={styles.data}>
        <a href={result.link} className={styles.info}>
          {result.title}
        </a>
        <a className={styles.link} href={result.link}>
          <img src={result.favicon} alt="fav"></img>
          <span>
            {result.link.length > 30
              ? `${result.link.substring(0, 30)}...`
              : result.link}
          </span>
        </a>
        <div className={styles.txt}>
          {result.description.length > 150
            ? `${result.description.substring(0, 150)}...`
            : result.description}
        </div>
      </div>
    </div>
  );
};

export default Content;
