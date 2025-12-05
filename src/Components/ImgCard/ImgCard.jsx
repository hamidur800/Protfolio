import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const ImgCard = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-70 w-70 mx-auto "
      >
        <SwiperSlide className="">
          <img
            src="/abouta.jpeg"
            alt="About"
            className="max-w-full object-cover h-70 w-70 border border-blue-600 rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide className="border border-blue-600 rounded-2xl">
          <img
            src="/aboutb.jpeg"
            alt="About"
            className="max-w-full h-70 w-70 border-blue-600 rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImgCard;
