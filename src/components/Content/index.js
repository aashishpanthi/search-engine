import styles from "./content.module.css";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Content = () => {
  const [title,setTitle]=useState("Aaashish");
  
  return( <div className={styles.container}>
    
      <div className={styles.og}>
      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--nlsMuist--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/515453/9685da9d-4c14-4944-822d-6e3bc7ea969d.jpg" alt="ogimage" ></img>
      </div>
      <div className={styles.data}>
      <div className={styles.info}>{title}</div>
      <div className={styles.link}>
      <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right"/>
      <a href="#">https://aashishpanthi.info.np</a>
      </div>
      <div className={styles.txt}>Very passionate about web and app development. An aspiring developer who loves learning and sharing that knowledge as open source.</div>
      </div>
    
  </div>
  )
};

export default Content;
