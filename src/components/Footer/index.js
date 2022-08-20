import styles from "./footer.module.css";

const Footer = () => {
  return <footer className={styles.footer}>
    <div>
      <h1 className={styles.thanks}>
        Thanks to <a href="https://redis.com/">Redis</a> X <a href="https://dev.to/">dev.to</a>
      </h1>
    </div>
  </footer>;
};

export default Footer;
