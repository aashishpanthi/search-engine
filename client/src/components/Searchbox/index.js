import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBox = ({ value = "" }) => {
  const [query, setQuery] = useState(value);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.length > 0) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.search_box} id="searchBox">
      <form onSubmit={handleSearch} className={styles.search_form}>
        <input
          type="text "
          placeholder="Search anything..."
          className={styles.search_input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus={true}
        />

        <button className={styles.icon} type="submit">
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            className={styles.search_icon}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
