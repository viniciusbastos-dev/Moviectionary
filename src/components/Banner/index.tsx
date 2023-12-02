import { FunctionComponent } from "react";
import styles from "./Banner.module.css";

interface Trending {
  id: number;
  title: string;
  background: string;
  poster: string;
  type: string;
  release: string;
  votes: number;
  overview: string;
}

interface BannerProps {
  trending: Trending[];
}

const Banner: FunctionComponent<BannerProps> = ({ trending }) => {
  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: `url('${trending[0].background}')`,
      }}
    >
      <div className={styles.bannerContainer}>
        <div>
          <p className={styles.category}>
            {trending[0].type === "movie" ? "Movie" : "Tv Show"}
          </p>
          <h1 className={styles.title}>{trending[0].title}</h1>
          <p>Sinopse</p>
          <p className={styles.synopsis}>{trending[0].overview}</p>
        </div>
        <img
          className={styles.bannerImage}
          src={`https://image.tmdb.org/t/p/original${trending[0].poster}`}
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
