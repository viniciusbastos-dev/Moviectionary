import { requestHandler } from "./requestHandler";
import axios from "axios";

const region = window.navigator.language;

interface Genres {
  id: number;
  name: string;
}

interface GetMediaDetailsParams {
  media_type: string;
  id: string;
}

export interface MediaDetails {
  title: string;
  name: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  genres: Genres[];
  poster_path: string;
  backdrop_path: string;
  runtime: number;
}

export const getMediaDetails = requestHandler<
  GetMediaDetailsParams,
  MediaDetails
>((params) =>
  axios.get(
    `https://api.themoviedb.org/3/${params?.media_type}/${params?.id}?api_key=66db327435f1565a9898a217047fdfd8&append_to_response=credits&language=${region}`
  )
);

export const MediaObject = {
  title: "",
  name: "",
  overview: "",
  release_date: "",
  first_air_date: "",
  genres: [],
  poster_path: "",
  backdrop_path: "",
  runtime: 0,
};
