import { getTrendingShows } from "../../services/apiRequest";
import styles from "./Banner.module.css";
import { useEffect, useState } from "react";

const Banner = () => {
  interface ProgramData {
    id: number;
    title: string;
    background: string;
    poster: string;
    type: string;
    release: string;
    votes: number;
    overview: string;
  }
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [shows, setShows] = useState<ProgramData[]>([]);

  useEffect(() => {
    (async () => {
      const programData = await getTrendingShows();
      setShows(programData);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${shows[0].background}')`,
      }}
    >
      <div className={styles.bannerContainer}>
        <div>
          <p className={styles.category}>
            {shows[0].type === "movie" ? "Movie" : "Tv Show"}
          </p>
          <h1 className={styles.title}>{shows[0].title}</h1>
          <p>Sinopse</p>
          <p className={styles.synopsis}>{shows[0].overview}</p>
        </div>
        <img
          className={styles.bannerImage}
          src={`https://image.tmdb.org/t/p/original${shows[0].poster}`}
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
