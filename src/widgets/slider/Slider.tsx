import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Slide from "../../features/slide/Slide";
import { appatom } from "../../atom";
import { useAtom } from "jotai";
import { getSlidesDataByIndex } from "../../entities/time-period/tools";
import { timePeriodData } from "../../entities/time-period/constants";

const Slider = () => {
  const [activeIndex] = useAtom(appatom);

  const slidesData = getSlidesDataByIndex(activeIndex, timePeriodData);

  return (
    <Swiper
      spaceBetween={80}
      slidesPerView={3}
      navigation={true}
      modules={[Navigation]}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index + slide.title}>
          <Slide title={slide.title} content={slide.content} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
