import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaContext } from "../../hooks/useMediaContext";
import Card from "../Card";

const Carousel = () => {
  const { media } = useMediaContext();
  return (
    <Swiper modules={[Navigation]} navigation slidesPerView={3}>
      {media.map((item) => (
        <SwiperSlide key={item.id}>
          <Card {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
