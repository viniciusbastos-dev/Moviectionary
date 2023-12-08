import { useEffect, useState } from "react";
import { TrendingItem, getTrending } from "../../services/getTrending";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";
import Loading from "../../components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [trending, setTrending] = useState<TrendingItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTrending({ page: 1, time: "day" });

      if (response.code === "success") {
        setTrending((prev) => [...prev, ...response.data.results]);
      }
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
