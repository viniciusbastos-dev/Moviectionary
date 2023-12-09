import { FC } from "react";
import { MediaDetails } from "../../services/getMediaDetails";
import styles from "./MediaInfo.module.css";

// TODO: Tentar aplicar styled component

interface MediaInfoProps {
  mediaDetails: MediaDetails;
}

const MediaInfo: FC<MediaInfoProps> = ({ mediaDetails }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const releaseYear = (
    mediaDetails.release_date ?? mediaDetails.first_air_date
  ).split("-")[0];

  const convertToHours = (runtime: number): string => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours}h ${minutes}m`;
  };

  return (
    <div
      className={styles.backdrop}
      style={{
        backgroundImage: `url('${baseUrl}${mediaDetails.backdrop_path}')`,
      }}
    >
      <div className={styles.colorOverlay}>
        <section className={styles.header}>
          <img
            className={styles.mediaPoster}
            src={baseUrl + mediaDetails.poster_path}
            alt={`${mediaDetails.title ?? mediaDetails.name} Poster`}
          />
          <section className={styles.headerWrapper}>
            <div className={styles.headerInfo}>
              <h2 className={styles.title}>
                {mediaDetails.title ?? mediaDetails.name}
                <span className={styles.releaseYear}>({releaseYear})</span>
              </h2>

              <div className={styles.facts}>
                <span className={styles.releaseDate}>
                  {mediaDetails.release_date ?? mediaDetails.first_air_date}
                </span>
                <ul className={styles.genres}>
                  {mediaDetails.genres.map((genre, i) => (
                    <li key={genre.id}>
                      {genre.name}
                      {i !== mediaDetails.genres.length - 1 && ", "}
                    </li>
                  ))}
                </ul>
                {mediaDetails.runtime && (
                  <span className={styles.runtime}>
                    {convertToHours(mediaDetails.runtime)}
                  </span>
                )}
              </div>

              <div>
                <h3 className={styles.overviewTitle}>Sinopse</h3>
                <p>{mediaDetails.overview}</p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default MediaInfo;
