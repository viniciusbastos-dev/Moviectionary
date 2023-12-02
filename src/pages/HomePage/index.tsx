import { useEffect, useState } from "react";
import { getTrendingShows } from "../../services/apiRequest";
import styles from "./HomePage.module.css";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";

type Trending = {
  id: number;
  title: string;
  background: string;
  poster: string;
  type: string;
  release: string;
  votes: number;
  overview: string;
};

const HomePage = () => {
  const [trending, setTrending] = useState<Trending[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const language = window.navigator.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = await getTrendingShows(1, language);
        setTrending(requestData);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [language]);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.loading}>Carregando...</h1>
      </div>
    );
  }

  return (
    <>
      <Banner trending={trending} />
      <Carousel trending={trending} />
    </>
  );
};

export default HomePage;
