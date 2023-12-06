import { useEffect, useState } from "react";
import { getTrending } from "../../services/apiRequests";
import styles from "./Home.module.css";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";
import Progress from "../../components/Progress";

interface Trending {
  id: number;
  votes: number;
  title: string;
  overview: string;
  media_type: string;
  release: string;
  backgroundUrl: string;
  posterUrl: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [trending, setTrending] = useState<Trending[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const language = window.navigator.language;
      const data = await getTrending(1, "day", language);
      setTrending((prev) => [...prev, ...data]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <section className={styles.container}>
      <Progress size={250} value={99} />
    </section>
  ) : (
    <>
      <Banner trending={trending} />
      <Carousel trending={trending} />
    </>
  );
}
