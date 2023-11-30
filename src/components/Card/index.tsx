import styles from "./Card.module.css";
import { FunctionComponent } from "react";

interface CardData {
  poster: string;
  title: string;
  release: string;
  votes: number;
}

const Card: FunctionComponent<CardData> = ({
  poster,
  title,
  release,
  votes,
}) => {
  return (
    <article className={styles.card}>
      <img
        className={styles.cardImage}
        src={poster}
        alt={`${title}'s poster`}
      />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDetail}>{release}</p>
      {votes !== 0 && <p>{(votes * 10).toFixed(0) }%</p>}
    </article>
  );
};

export default Card;
