import React from "react";
import iconLucky from "../assets/iconlucky.svg";
import icon3 from "../assets/icon-3.svg";

export default function LuckyMediaSection() {
  return (
    <section className="bg-black text-white px-[30px] sm:px-6 md:px-8 pt-[120px] pb-10 sm:py-20 md:py-24 mt-20 sm:mt-[150px] md:mt-[300px]">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
        
        {/* Left side */}
        <div className="text-center lg:text-left">
          <span className="bg-[#00FF9C] text-black text-[35px] sm:text-[14px] md:text-[50px] lg:text-[51px] font-[600] px-3 py-1 rounded-md inline-block">
            Lucky Media
          </span>

          <h2 className="font-[700] mt-4 text-[19px] leading-[34px] sm:text-[24px] sm:leading-[34px] md:text-[42px] md:leading-[72px] lg:text-[48px] lg:leading-[72px]">
            You may not believe in luck,<br />
            but this isn’t just a chance meeting. Welcome to a world where art
            meets digital precision.
          </h2>
            <a href="https://calendly.com/hi-luckymedia/firstmeeting">
          <button className="mt-10 border-[5px] border-black bg-white text-black px-4 sm:px-5 py-3 sm:py-4 rounded-xl transition duration-500 hover:border-black hover:shadow-[0_0_30px_8px_rgba(0,255,170,0.9)] text-sm sm:text-base md:text-xl mb-10">
            Schedule an online meeting
          </button>
          </a>
        </div>

        {/* Right side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a] rounded-lg p-4 sm:p-6 2xl:p-7 text-center">
            <div className="justify-center flex mt-5">
              <img
                src={iconLucky}
                alt="Lucky Icon"
                className="w-[55px] sm:w-[35px] lg:w-[47px]"
              />
            </div>
            <h3 className="font-bold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px] mt-4 mb-8">
              Why is it worth it?
            </h3>
            <p className="text-[#D9D9D9] font-light text-base sm:text-xl md:text-2xl 2xl:text-3xl mt-2 leading-[32px] sm:leading-8 md:leading-9 2xl:leading-[45px]">
              In our monthly subscription, we provide your company with the
              services of a marketing specialist, web developer, graphic
              designer, and copywriter at affordable price. Remember, marketing
              is one of the key pillars of every successful business.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] rounded-lg p-4 sm:p-6 2xl:p-7 text-center">
            <div className="justify-center flex mt-5">
              <img
                src={icon3}
                alt="Work Ethic Icon"
                className="w-[55px] sm:w-[35px] lg:w-[47px] 2xl:w-"
              />
            </div>
            <h3 className="font-bold mt-4 text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px] mb-8">
              Our work <br className="2xl:hidden xl:block hidden" /> ethic
            </h3>
            <p className="text-[#D9D9D9] font-light text-base sm:text-xl md:text-2xl 2xl:text-3xl mt-2 leading-[32px] sm:leading-8 md:leading-9 2xl:leading-[45px]">
              You’re the expert in your product, and we’re here for marketing.
              You don’t need to keep up with the latest trends or speak
              marketing jargon. We stay ahead of the game, so you can rely on
              us. We’ll explain everything, so you know what you’re paying for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
