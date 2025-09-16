import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";
import "./SocialSlider.css";
// import { sliderConfig } from "./sliderConfig";

// Alag-alag imports
import img1 from "../assets/book-1 (1).jpg";
import img2 from "../assets/book-1 (2).jpg";
import img3 from "../assets/book-1 (3).jpg";
import img4 from "../assets/book-1 (4).jpg";
import img5 from "../assets/book-1 (5).jpg";
import img6 from "../assets/book-1 (6).jpg";
import img7 from "../assets/book-1 (1).jpg";
import img8 from "../assets/book-1 (2).jpg";
import img9 from "../assets/book-1 (3).jpg";
import img10 from "../assets/book-1 (5).jpg";
import img11 from "../assets/book-1 (6).jpg";

const PoliticalSlider: React.FC = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, EffectCoverflow, Autoplay]}
        // {...sliderConfig}
        className="mySwiper w-full"
      >
        <SwiperSlide><img src={img1} alt="slide1" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="slide2" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="slide3" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="slide4" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="slide5" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="slide6" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="slide7" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="slide8" /></SwiperSlide>
        <SwiperSlide><img src={img9} alt="slide9" /></SwiperSlide>
        <SwiperSlide><img src={img10} alt="slide10" /></SwiperSlide>
        <SwiperSlide><img src={img11} alt="slide11" /></SwiperSlide>
        
      </Swiper>

      {/* Navigation Buttons */}
      {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}
    </div>
  );
};

export default PoliticalSlider;
