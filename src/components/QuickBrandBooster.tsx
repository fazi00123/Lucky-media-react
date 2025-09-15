import React from "react";
import fitdietaImg from "../assets/fitdieta.png"; // ✅ import image


const QuickBrandBooster: React.FC = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row mt-0">
      {/* ========== Left Side (Image Area) ========== */}
      <div className="bg-[#00FF9C] flex justify-center items-center w-full lg:w-1/2 p-6 sm:p-8 md:p-14">
        <img
          src={fitdietaImg} // ✅ imported image use here
          alt="FitDieta Branding"
          className="max-w-[250px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-full"
        />
      </div>

      {/* ========== Right Side (Content Area) ========== */}
      <div className="bg-black/90 text-white w-full lg:w-1/2 
                      px-4 sm:px-8 md:px-10 
                      py-10 sm:py-16 md:py-24 
                      flex flex-col justify-center items-center pt-12 pb-20">
        
        {/* Heading */}
        <h3 className="bg-[#00FF9C] text-black font-extrabold 
                       text-xl sm:text-2xl md:text-[25px] 
                       px-3 sm:px-5 py-3 sm:py-6 rounded-md mb-4 
                       w-[250px] sm:w-[300px] md:w-[300px] text-center">
          Quick brand booster
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl 
            text-center 
            leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[41px] text-white xl:pt-16 pt-8">
          FitDieta has been a trusted provider of diet catering services for many years. 
          Our client needed a quick boost in engagement and online presence before selling 
          their “ready-made” business to a new owner. While their Google Ads and Meta Ads 
          campaigns were in place, we focused on crafting visually appealing, “tasty” layouts 
          that captured attention and enhanced the overall online experience, along with a 
          user-friendly website, where customers could place orders.
        </p>
      </div>
    </section>
  );
};

export default QuickBrandBooster;
