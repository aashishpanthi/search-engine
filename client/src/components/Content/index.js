import styles from "./content.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = ({ result }) => {
  return (
    <div className={styles.container}>
      <div className={styles.og}>
        {result.ogImage && <img src={result.ogImage} alt="ogimage" />}
      </div>
      <div className={styles.data}>
        <a href={result.url} className={styles.info}>
          {result.title.length > 50
            ? `${result.title.substring(0, 60)}...`
            : result.title}
        </a>
        <a className={styles.link} href={result.url}>
          {result.favicon ? (
            <img src={result.favicon} alt="ogimage" />
          ) : (
            <FontAwesomeIcon icon="globe" />
          )}
          <span>
            {result.url.length > 30
              ? `${result.url.substring(0, 30)}...`
              : result.url}
          </span>
        </a>
        <div className={styles.txt}>
          {result.description.length !== 0
            ? `${result.description.substring(0, 150)}...`
            : `${result.firstFewWords.substring(0, 150)}...`}
        </div>
      </div>
    </div>
  );
};

export default Content;
