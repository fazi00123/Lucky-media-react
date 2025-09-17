import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./CustomSlider.css";


// Images import
import img1 from "../assets/salider-scroll-1 (1).png";
import img2 from "../assets/salider-scroll-1 (2).png";
import img3 from "../assets/salider-scroll-1 (3).png";
import img4 from "../assets/salider-scroll-1 (4).png";

const CustomSlider: React.FC = () => {
  return (
    <div className="custom-slider-container">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="custom-slider"
      >
        <SwiperSlide>
          <img src={img1} className="custom-slide-img" alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="custom-slide-img" alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="custom-slide-img" alt="slide3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="custom-slide-img" alt="slide4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomSlider;
