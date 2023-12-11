import { useLayoutEffect, useState } from "react";
import { TrendingItem, getTrending } from "../../services/getTrending";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";
import Loading from "../../components/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [trending, setTrending] = useState<TrendingItem[]>([]);

  useLayoutEffect(() => {
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
};

export default Home;
