import styles from "./Banner.module.css";
import { useMediaContext } from "../../hooks/useMediaContext";

const Banner = () => {
  const { media, isLoading } = useMediaContext();

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: `url('${media[0].background}')`,
      }}
    >
      <div className={styles.bannerContainer}>
        <div>
          <p className={styles.category}>
            {media[0].type === "movie" ? "Movie" : "Tv Show"}
          </p>
          <h1 className={styles.title}>{media[0].title}</h1>
          <p>Sinopse</p>
          <p className={styles.synopsis}>{media[0].overview}</p>
        </div>
        <img
          className={styles.bannerImage}
          src={`https://image.tmdb.org/t/p/original${media[0].poster}`}
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
