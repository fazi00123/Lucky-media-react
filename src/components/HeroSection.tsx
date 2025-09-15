import React, { useState } from "react";
import Lottie from "react-lottie-player";
import animationData from "../assets/Animation-1716206787868.json"; // JSON path

export default function HeroSection() {
  const [hoverKey, setHoverKey] = useState(0); // har hover pe reset key change hoga

  const handleMouseEnter = () => {
    // key badalne se animation dobara se start hoga
    setHoverKey((prev) => prev + 1);
  };

  return (
    <section>
      <div className="w-full text-center">
        <div className="pt-10 sm:pt-20 lg:pt-[150px] flex justify-center">
          <h1 className="text-center text-[28px] sm:text-[30px] lg:text-[62px] font-[600] leading-[35px] sm:leading-[38px] lg:leading-[62px] px-4 sm:px-10 md:px-20 lg:px-52">
            Looking for a remote{" "} <br />
            <span className="text-[#00ff9c]">marketing team<br /></span>
            to fully support your business?
          </h1>
        </div>

        <div className="pt-10 sm:pt-16 lg:pt-20 mb-16 items-center flex justify-center">
          <h2 className="text-center rounded-md px-5 py-4 text-[15px]  md:text-[3vw] lg:text-[42px] font-bold leading-tight bg-[#00FF9C]">
            We'll bring luck to your company
          </h2>
        </div>

        {/* Lottie animation hover par reset */}
        <div
          className="w-full flex justify-center items-center"
          onMouseEnter={handleMouseEnter}
        >
          <div className="w-[584px]">
            <Lottie
              key={hoverKey} // har hover par animation reset hoga
              play
              loop={false} // sirf ek baar chalega
              animationData={animationData}
            />
          </div>
        </div>

        <div className="text-center justify-center flex pt-6 sm:pt-8 lg:pt-10">
          <a href="https://8hnya0u21xs.typeform.com/to/UNfLKWnc?typeform-source=luckymedia.marketing">
            <button className="relative flex items-center justify-center rounded-[16px] border-[3px] border-black hover:border-transparent px-4 sm:px-6 py-3 font-worksans text-black transition-all duration-500 group ">
              <span className="transition-all text-[14px] sm:text-[20px] md:text-[26px] lg:text-[31px] duration-500 group-hover:opacity-0 whitespace-nowrap font-semibold p-1">
                Get a service quote within 24 hours!
              </span>

              <span className="absolute opacity-0 font-semibold text-[14px] sm:text-[20px] md:text-[26px] lg:text-[31px] transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_20px_4px_rgba(0,255,170,0.9)] bg-white rounded-lg px-4 sm:px-6 py-2 border-[5px] border-black whitespace-nowrap ">
                Fill out the brief
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
