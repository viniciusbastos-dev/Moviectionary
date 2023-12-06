import { useEffect, useState } from "react";
import { getTrending } from "../../services/apiRequests";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";
import Loading from "../../components/Loading";

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
      const data = await getTrending(1, "day");
      setTrending((prev) => [...prev, ...data]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Banner trending={trending} />
      <Carousel trending={trending} />
    </>
  );
}
