import { MediaContext } from "../contexts/Media";
import { useContext, useEffect, useState } from "react";
import { getTrendingShows } from "../services/apiRequest";

export const useMediaContext = () => {
  const { media, setMedia } = useContext(MediaContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  const language = window.navigator.language

  useEffect(() => {
    if (!hasLoaded) {
      const fetchData = async () => {
        try {
          const requestData = await getTrendingShows(1, language);
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
  }, [hasLoaded, setMedia, language]);

  return { media, isLoading };
};
