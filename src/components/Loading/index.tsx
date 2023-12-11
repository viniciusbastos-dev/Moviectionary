import styles from "./Loading.module.css";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <section className={styles.container}>
      <CircularProgress size={100} />
    </section>
  );
};

export default Loading;
