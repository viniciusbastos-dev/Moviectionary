import { Navigation } from "swiper/modules";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import styles from "./Carousel.module.css";
import { TrendingItem } from "../../services/getTrending";

interface BannerProps {
  trending: TrendingItem[];
}

const Carousel: FC<BannerProps> = ({ trending }) => {
  return (
    <div className={styles.container}>
      <h1>Trending</h1>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={8}
        spaceBetween={150}
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
