import styles from "./style.module.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return <div className={styles.container}>
    <div className={styles.contain}>
    <Link to="/searchbox">
     <button className={styles.button}>
        <p>Webportal</p>
     </button>
 </Link>
    </div>

  </div>;
};

export default Navbar;
