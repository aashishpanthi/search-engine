import styles from "./style.module.css"
import { useEffect} from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [theme, setTheme] = useState('light-theme')
  const toggleTheme=()=>{
    if(theme==='dark-theme'){
      setTheme('light-theme')
    }
    else{
      setTheme('dark-theme')
    }
  };
  useEffect(()=>{
    document.body.className=theme;
  },[theme]);
  return (
  <div className={styles.container}>
    <div className={styles.contain}>
    <Link to="/add">
     <button className={styles.button}>
        <p>Webportal</p>
     </button>
 </Link>
    </div>
<div>
  <button className={styles.buttonn} onClick={()=>toggleTheme()}>
    Enable dark mode
  </button>
</div>
  </div>
  );
};

export default Navbar;
