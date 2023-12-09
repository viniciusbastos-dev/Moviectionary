import { requestHandler } from "./requestHandler";
import axios from "axios";
const region = window.navigator.language;

export interface TrendingItem {
  id: number;
  title: string;
  name: string;
  backdrop_path: string;
  poster_path: string;
  media_type: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  overview: string;
}

interface Results {
  results: TrendingItem[];
}

interface GetTrendingParams {
  page: number;
  time: string;
}

export const getTrending = requestHandler<GetTrendingParams, Results>(
  (params) =>
    axios.get(
      `https://api.themoviedb.org/3/trending/all/${
        params?.time ?? "day"
      }?api_key=66db327435f1565a9898a217047fdfd8&language=${region}`,
      { params }
    )
);
