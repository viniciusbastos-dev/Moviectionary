import { FC, ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => (
  <section className={styles.container}>{children}</section>
);
export default Container;
