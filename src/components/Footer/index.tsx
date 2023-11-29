import logo from "/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Moviectionary's Logo" />
      <p className={styles.copyright}>
        &copy; 2023 <span className={styles.name}>Vinícius Bastos</span>
      </p>
    </footer>
  );
};

export default Footer;
