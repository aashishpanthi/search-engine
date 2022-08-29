import styles from "./style.module.css";

const NoResultFound = ({ query }) => {
  return (
    <div className={styles.noResultFound}>
      <h1>No results found for "{query}"</h1>
      <img src="/static/searching.svg" alt="searching" />
      <p>Try searching for something else.</p>
    </div>
  );
};
export default NoResultFound;
