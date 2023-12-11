import { FC } from "react";
import { TrendingItem } from "../../services/getTrending";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card: FC<TrendingItem> = ({
  id,
  vote_average,
  title,
  name,
  media_type,
  poster_path,
  release_date,
  first_air_date,
}) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const votes = vote_average.toFixed(1);
  const releaseYear = (release_date ?? first_air_date).split("-")[0];

  return (
    <article className={styles.card_container}>
      <Link to={`${media_type}/${id}`}>
        <img
          className={styles.card_image}
          src={`${baseUrl}${poster_path}`}
          alt={`${title ?? name}'s poster`}
        />
      </Link>
      <h2 className={styles.card_title}>{title ?? name}</h2>
      {releaseYear && <p className={styles.card_details}>{releaseYear}</p>}
      {votes && <p className={styles.card_details}>{votes}</p>}
    </article>
  );
};

export default Card;
