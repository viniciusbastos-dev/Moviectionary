import { Link } from "react-router-dom";
import HeaderLink from "../HeaderLink";
import logo from "/logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="Moviectionary's Logo" />
      </Link>
      <nav>
        <ul className={styles.linkList}>
          <li>
            <HeaderLink url="./movie">Movie</HeaderLink>
          </li>
          <li>
            <HeaderLink url="./tv">TV Show</HeaderLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
