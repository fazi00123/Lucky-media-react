import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// 🔹 Apni images ko assets folder me rakho
import videoMockup from "../assets/Object_6.webm";
// import img1 from "../assets/walentynki.png";
// import img2 from "../assets/thanks you.jpg";
// import img3 from "../assets/loading.jpg";
// import img4 from "../assets/reklama-01.png";
// import img5 from "../assets/scannenenwerken-01.png";
// import img6 from "../assets/square-01.png";
// import img7 from "../assets/engineering_Obszar-roboczy-1.png";
// import img8 from "../assets/Find-your-match-here-3.png";
// import img9 from "../assets/mechanic11-01.png";
// import img10 from "../assets/musicday-fb_Obszar-roboczy-1.png";
// import img11 from "../assets/certified-01.png";

const SocialMedia: React.FC = () => {
  return (
    <section>
      <div className="bg-black flex flex-col lg:flex-row py-20 mt-16">
        {/* 🔸 Left Content */}
        <div className="w-full lg:w-1/3">
          {/* Heading */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-12 2xl:pl-24">
            <h3 className="inline-block text-2xl sm:text-4xl md:text-[44px] lg:text-5xl xl:text-[40px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
              Social media
            </h3>
          </div>

          {/* Mobile Video Mockup */}
          <div className="flex justify-center md:justify-start mt-28 lg:mt-32">
            <div
              className="bg-[#00FF9C] rounded-tr-[30px] sm:rounded-tr-[40px] md:rounded-tr-[50px] 
                          rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[50px] 
                          p-4 sm:p-6 w-[85%] 
                          relative h-[180px] sm:h-[220px] md:h-[460px] lg:h-[220px] 2xl:h-[270px]"
            >
              <video
                loop
                autoPlay
                muted
                playsInline
                className="w-full rounded-xl -mt-28"
              >
                <source src={videoMockup} type="video/webm" />
              </video>
            </div>
          </div>
        </div>

        {/* 🔸 Right Content */}
        <div className="w-full lg:w-2/3 mt-24 lg:mt-0 px-4">
          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            className="mySwiper"
          >
            {/* <SwiperSlide>
              <img src={img1} alt="Social Post" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Social Post" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Social Post" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Social Post" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="Social Post" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="Social Post" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="Social Post" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="Social Post" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="Social Post" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img10} alt="Social Post" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img11} alt="Social Post" width="100%" />
            </SwiperSlide> */}
          </Swiper>

          {/* Description */}
          <div className="text-center flex justify-center mt-10">
            <p className="text-white text-[15px] sm:text-[18px] md:text-[20px] leading-[28px] md:leading-[36px] text-center w-[80%]">
              We create engaging, professional, and impactful posts that
              resonate with the FlexToday audience. Our goal is to capture the
              user’s attention, whether they are scrolling through their feed or
              searching for their next career move. Here are some of our social
              media posts, made for targeted paid advertisements, job offer
              announcements, Google Ads and usual content designed to uphold our
              polished and professional online presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
