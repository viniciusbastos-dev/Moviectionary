import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import Progress from "../Progress";

interface CardData {
  id: number;
  media_type: string;
  posterUrl: string;
  title: string;
  release: string;
  votes: number;
}

const Card: FunctionComponent<CardData> = ({
  id,
  media_type,
  posterUrl,
  title,
  release,
  votes,
}) => {
  return (
    <article className={styles.card}>
      <Link to={`${media_type}/${id}`}>
        <img
          className={styles.cardImage}
          src={posterUrl}
          alt={`${title}'s poster`}
        />
      </Link>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDetail}>{release}</p>
      {votes !== 0 && <Progress size={48} value={votes * 10} />}
    </article>
  );
};

export default Card;
