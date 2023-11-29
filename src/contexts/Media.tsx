import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type MediaProviderProps = {
  children: ReactNode;
};

type Media = {
  id: number;
  title: string;
  background: string;
  poster: string;
  type: string;
  release: string;
  votes: number;
  overview: string;
};

type MediaContextType = {
  media: Media[];
  setMedia: Dispatch<SetStateAction<Media[]>>;
};

const initialMedia: Media[] = [];
export const MediaContext = createContext<MediaContextType>({
  media: initialMedia,
  setMedia: () => {},
});

export const MediaProvider = ({
  children,
}: MediaProviderProps) => {
  const [media, setMedia] = useState<Media[]>([]);

  return (
    <MediaContext.Provider value={{ media, setMedia }}>
      {children}
    </MediaContext.Provider>
  );
};
