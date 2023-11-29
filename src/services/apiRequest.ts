import axios from "axios";

class Program {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly background: string,
    readonly poster: string,
    readonly type: string,
    readonly release: string,
    readonly votes: number,
    readonly overview: string
  ) {}
}

interface ProgramApiResponse {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string;
  poster_path: string;
  media_type: string;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  overview: string;
}

const convertDataToObject = async (program: ProgramApiResponse) => {
  const { id, backdrop_path, poster_path, media_type, vote_average, overview } =
    program;
  const release = program.release_date ?? program.first_air_date ?? "";
  const title = program.title ?? program.name ?? "";
  const showDetails = new Program(
    id,
    title,
    backdrop_path,
    poster_path,
    media_type,
    release,
    vote_average,
    overview
  );
  return showDetails;
};

const getTrendingShows = async () => {
  try {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=66db327435f1565a9898a217047fdfd8&language=pt-BR&page=1`;

    const response = await axios.get(url);
    const programs = response.data.results;

    const detailRequests = programs.map((program: ProgramApiResponse) =>
      convertDataToObject(program)
    );

    return Promise.all(detailRequests);
  } catch (error) {
    console.error("Erro ao obter programas populares:", error);
    throw error;
  }
};

export { getTrendingShows };
