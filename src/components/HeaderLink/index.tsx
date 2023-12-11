import { ReactNode, FC } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderLink.module.css"

interface HeaderLinkProps {
  url: string;
  children: ReactNode;
}

const HeaderLink: FC<HeaderLinkProps> = ({ url, children }) => (
  <Link className={styles.link} to={url}>{children}</Link>
);
export default HeaderLink;
