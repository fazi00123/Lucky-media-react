import React from "react";

import LogoVideo from "../assets/finalanimacja.mp4"; // import your video


const LogoAnimationSection: React.FC = () => {
  return (
    <section className="mt-10">
      <div className="flex flex-col lg:flex-row 2xl:gap-52 xl:gap-20 gap-10 xl:pl-16 md:px-12 lg:px-0">
        
        {/* Left side (text) */}
        <div className="lg:w-1/2 flex flex-col text-center pt-6 leading-[28px] lg:leading-[36px]">
          
          {/* Heading */}
          <div className="flex justify-center lg:justify-start mb-4">
            <div className="xl:w-[350px] md:w-[260px] px-3 sm:px-5 py-3 sm:py-6 md:text-[29px] text-[22px] font-extrabold flex justify-center rounded-xl bg-[#00ff9c] xl:text-[39px]">
              <h2>
              logo animation
              </h2>
            </div>
          </div>
          
          {/* Normal text */}
          <p className="text-[#1b1b1b] order-1 md:leading-[36px] xl:leading-[40px] text-base md:text-xl lg:text-lg xl:text-xl pt-4 lg:text-start text-center px-5">
            In today’s digital landscape, social media is dominated by video content.
            To stand out, your brand needs to be dynamic, memorable, and visually compelling. That’s why
            investing in logo animation is a game-changer. Social media thrives on videos, and a logo
            animation transforms any content into something visually striking and memorable. Whether it’s a
            video or a picture animation, you can easily edit it in a simple mobile app or social media’s
            built-in editor and finish it with your animated logo. This ensures your brand is always
            represented consistently and professionally across all platforms.
          </p>

          {/* Bold serif text (mobile par sabse last) */}
          <p className="font-bold pt-4 order-3 lg:order-2 md:leading-[36px] text-base xl:leading-[40px] md:text-xl lg:text-lg xl:text-xl lg:text-start text-center px-5">
            FitDieta’s house brand is all about healthy food, friendly vibes, and
            designs that look good enough try the food. To capture this essence, we created a logo animation
            that extends the playful, tasty appeal of apples and carrots, making them look irresistibly
            bite-worthy!
          </p>
        </div>

        {/* Right side (video) */}
      <div className="lg:w-1/2 lg:px-[44px] xl:px-0 flex justify-evenly order-2 lg:order-3">
          <div className="pt-[22px]">
            <video controls className="w-full" src={LogoVideo}></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoAnimationSection;
