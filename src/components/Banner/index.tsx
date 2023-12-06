import { FunctionComponent } from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

interface Trending {
  id: number;
  title: string;
  backgroundUrl: string;
  posterUrl: string;
  media_type: string;
  release: string;
  votes: number;
  overview: string;
}

interface BannerProps {
  trending: Trending[];
}

const Banner: FunctionComponent<BannerProps> = ({ trending }) => {
  const data = trending[0];

  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: `url('${data.backgroundUrl}')`,
      }}
    >
      <div className={styles.bannerContainer}>
        <div>
          <p className={styles.category}>
            {data.media_type === "movie" ? "Movie" : "Tv Show"}
          </p>
          <h1 className={styles.title}>{data.title}</h1>
          <p>Sinopse</p>
          <p className={styles.synopsis}>{data.overview}</p>
        </div>
        <Link to={`${data.media_type}/${data.id}`}>
          <img
            className={styles.bannerImage}
            src={`https://image.tmdb.org/t/p/original${data.posterUrl}`}
            alt={`${data.title}'s poster`}
          />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
