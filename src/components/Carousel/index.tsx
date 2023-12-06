import { Navigation } from "swiper/modules";
import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import styles from "./Carousel.module.css";

interface Trending {
  id: number;
  title: string;
  backgroundUrl: string;
  posterUrl: string;
  media_type: string;
  release: string;
  votes: number;
  overview: string;
}

interface BannerProps {
  trending: Trending[];
}

const Carousel: FunctionComponent<BannerProps> = ({ trending }) => {
  return (
    <div className={styles.container}>
      <h1>Trending</h1>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={5}
        spaceBetween={30}
      >
        {trending.map((item) => (
          <SwiperSlide key={item.id}>
            <Card {...item} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div id="intersectionFinal" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
