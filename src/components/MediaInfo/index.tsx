import { FC } from "react";
import { MediaDetails } from "../../services/getMediaDetails";
import styles from "./MediaInfo.module.css";

// TODO: Tentar aplicar styled component

const MediaInfo: FC<{ mediaDetails: MediaDetails }> = ({
  mediaDetails: {
    backdrop_path,
    poster_path,
    title,
    name,
    release_date,
    first_air_date,
    genres,
    runtime,
    overview,
  },
}) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const releaseYear = (release_date ?? first_air_date).split("-")[0];

  const convertToHours = (runtime: number): string => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours}h ${minutes}m`;
  };

  return (
    <div
      className={styles.backdrop}
      style={{
        backgroundImage: `url('${baseUrl}${backdrop_path}')`,
      }}
    >
      <div className={styles.colorOverlay}>
        <section className={styles.header}>
          <img
            className={styles.mediaPoster}
            src={`${baseUrl}${poster_path}`}
            alt={`${title ?? name} Poster`}
          />
          <section className={styles.headerWrapper}>
            <div className={styles.headerInfo}>
              <h2 className={styles.title}>
                {title ?? name}
                <span className={styles.releaseYear}>({releaseYear})</span>
              </h2>

              <div className={styles.facts}>
                <span className={styles.releaseDate}>
                  {release_date ?? first_air_date}
                </span>
                <ul className={styles.genres}>
                  {genres.map((genre, i) => (
                    <li key={genre.id}>
                      {genre.name}
                      {i !== genres.length - 1 && ", "}
                    </li>
                  ))}
                </ul>
                {runtime && (
                  <span className={styles.runtime}>
                    {convertToHours(runtime)}
                  </span>
                )}
              </div>

              <div>
                <h3 className={styles.overviewTitle}>Sinopse</h3>
                <p>{overview}</p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default MediaInfo;
