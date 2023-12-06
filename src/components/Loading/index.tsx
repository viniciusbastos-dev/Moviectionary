import styles from "./Loading.module.css";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <section className={styles.container}>
      <CircularProgress size={100} />
    </section>
  );
}
