import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// 🖼️ Import Images
import slide1 from "../assets/salider-scroll-1 (1).png";
import slide2 from "../assets/salider-scroll-1 (2).png";
import slide3 from "../assets/salider-scroll-1 (3).png";
import slide4 from "../assets/salider-scroll-1 (4).png";

// 🎥 Import Videos
import menuVideo from "../assets/menu-unscreen.webm";
import animacjaVideo from "../assets/animacja_tlo.mp4";

const CustomDesignSection = () => {
  useEffect(() => {
    new Swiper(".mySwiper2", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      speed: 800,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <section>
      <div className="bg-black flex flex-col lg:flex-row gap-[0px] py-20 mt-32">
        {/* 🔸 Left Content */}
        <div className="w-full lg:w-1/3">
          {/* 🔹 Heading */}
          <div className="flex justify-center lg:justify-start xl:pl-16 lg:pl-12">
            <h3 className="inline-block text-2xl sm:text-4xl font-[800] text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
              Custom design
            </h3>
          </div>

          {/* 🔹 Mobile Video */}
          <div className="flex justify-start mt-24 sm:mt-20 md:mt-28 lg:mt-60">
            <div className="bg-[#00FF9C] rounded-tr-[30px] sm:rounded-tr-[40px] md:rounded-tr-[50px] 
                          rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[50px] 
                          p-4 sm:p-6 w-[85%] 
                          relative h-[180px] md:h-[260px] lg:h-[220px] 2xl:h-[270px]">
              <div className="xl:top-[-90px] top-[-40px] top-[-30px] absolute -rotate-12 w-full">
                <video
                  className="w-full h-full object-cover "
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={menuVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* 🔸 Right Side Content */}
        <div className="w-full lg:w-2/3 mt-16 lg:mt-0 px-4">
          {/* Swiper Slider */}
          <div className="w-full">
            <div className="swiper mySwiper2 overflow-hidden">
              <div className="swiper-wrapper">
                {[slide1, slide2, slide3, slide4].map((slide, index) => (
                  <div className="swiper-slide" key={index}>
                    <img
                      src={slide}
                      className="w-full h-[400px] object-cover"
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 🔹 Description Video */}
          <div className="w-full flex justify-center items-center pt-20">
            <div className="">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={animacjaVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDesignSection;
