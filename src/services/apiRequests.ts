import axios from "axios";
const API_KEY = "66db327435f1565a9898a217047fdfd8";

interface TrendingApiResponse {
  id: number;
  vote_average: number;
  title: string;
  name: string;
  overview: string;
  media_type: string;
  release_date: string;
  first_air_date: string;
  backdrop_path: string;
  poster_path: string;
}

class Trending {
  constructor(
    readonly id: number,
    readonly votes: number,
    readonly title: string,
    readonly overview: string,
    readonly media_type: string,
    readonly release: string,
    readonly backgroundUrl: string,
    readonly posterUrl: string
  ) {}
}

const createTrendingObject = (data: TrendingApiResponse) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const title = data.title ?? data.name;
  const release = data.release_date ?? data.first_air_date;
  const backgroundUrl = `${baseUrl + data.backdrop_path}`;
  const posterUrl = `${baseUrl + data.poster_path}`;
  const { id, vote_average, overview, media_type } = data;

  const trending = new Trending(
    id,
    vote_average,
    title,
    overview,
    media_type,
    release,
    backgroundUrl,
    posterUrl
  );
  return trending;
};

const getTrending = async (page: number, time: string, lang: string) => {
  const url = `https://api.themoviedb.org/3/trending/all/${time}?api_key=${API_KEY}&language=${lang}&${page}`;
  const response = await axios.get(url);
  const data = response.data.results;

  const dataConverted = data.map((item: TrendingApiResponse) =>
    createTrendingObject(item)
  );

  return dataConverted;
};

export { getTrending };
