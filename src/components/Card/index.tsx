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
      <img className={styles.image} src={poster} alt={`${title}'s poster`} />
      <h2>{title}</h2>
      <p>{release}</p>
      <p>{votes * 10}%</p>
    </article>
  );
};

export default Card;
