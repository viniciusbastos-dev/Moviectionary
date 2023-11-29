import { MediaContext } from "../contexts/Media";
import { useContext, useEffect, useState } from "react";
import { getTrendingShows } from "../services/apiRequest";

export const useMediaContext = () => {
  const { media, setMedia } = useContext(MediaContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!hasLoaded) {
      const fetchData = async () => {
        try {
          const requestData = await getTrendingShows();
          setMedia(requestData);
          setIsLoading(false);
          setHasLoaded(true);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [hasLoaded, setMedia]);

  return { media, isLoading };
};
