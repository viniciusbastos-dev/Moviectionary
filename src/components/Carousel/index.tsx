import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaContext } from "../../hooks/useMediaContext";
import Card from "../Card";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const { media } = useMediaContext();
  return (
    <Swiper
      className={styles.carousel}
      modules={[Navigation]}
      navigation
      slidesPerView={5}
      spaceBetween={30}
      breakpoints={{
        1440: { slidesPerView: 4 },
      }}
    >
      {media.map((item) => (
        <SwiperSlide key={item.id}>
          <Card {...item} />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <div id="intersectionFinal" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
