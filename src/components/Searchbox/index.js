import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'
const SearchBox = () => {
  return (
    <div className={styles.search_box}>
      <input
        type="text "
        placeholder="Search anything..."
        className={styles.search_input}
      ></input>
      
      <div className={styles.icon}>
      <Link to='/search'>
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          className={styles.search_icon}
        />
        </Link>
      </div>
      
    </div>
  );
};

export default SearchBox;
