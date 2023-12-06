import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

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
  const votePercentage = (votes * 10).toFixed(0);

  return (
    <article className={styles.card}>
      <Link to={`${media_type}/${id}`}>
        <img
          className={styles.card_image}
          src={posterUrl}
          alt={`${title}'s poster`}
        />
      </Link>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.info_container}>
        {release !== "Invalid Date" && (
          <p className={styles.cardDetail}>{release}</p>
        )}
        <p>{votePercentage}%</p>
      </div>
    </article>
  );
};

export default Card;
