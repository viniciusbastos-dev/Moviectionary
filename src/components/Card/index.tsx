import { FunctionComponent } from "react";
import { TrendingItem } from "../../services/getTrending";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card: FunctionComponent<TrendingItem> = ({
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
  const votePercentage = (vote_average * 10).toFixed(0);

  return (
    <article className={styles.card}>
      <Link to={`${media_type}/${id}`}>
        <img
          className={styles.card_image}
          src={`${baseUrl}${poster_path}`}
          alt={`${title ?? name}'s poster`}
        />
      </Link>
      <h2 className={styles.cardTitle}>{title ?? name}</h2>
      <div className={styles.info_container}>
        {release_date && (
          <p className={styles.cardDetail}>{release_date ?? first_air_date}</p>
        )}
        <p>{votePercentage}%</p>
      </div>
    </article>
  );
};

export default Card;
