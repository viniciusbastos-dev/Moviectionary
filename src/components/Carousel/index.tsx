import { Navigation } from "swiper/modules";
import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import styles from "./Carousel.module.css";

interface Trending {
  id: number;
  title: string;
  background: string;
  poster: string;
  type: string;
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
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={5}
        spaceBetween={30}
        breakpoints={{
          1440: { slidesPerView: 4 },
        }}
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
