import { FunctionComponent } from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";
import { TrendingItem } from "../../services/getTrending";

interface BannerProps {
  trending: TrendingItem[];
}

const Banner: FunctionComponent<BannerProps> = ({ trending }) => {
  const data = trending[0];

  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`,
      }}
    >
      <div className={styles.bannerContainer}>
        <div>
          <p className={styles.category}>
            {data.media_type === "movie" ? "Movie" : "Tv Show"}
          </p>
          <h1 className={styles.title}>{data.title ?? data.name}</h1>
          <p>Sinopse</p>
          <p className={styles.synopsis}>{data.overview}</p>
        </div>
        <Link to={`${data.media_type}/${data.id}`}>
          <img
            className={styles.bannerImage}
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt={`${data.title ?? data.name}'s poster`}
          />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
