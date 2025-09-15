import React from "react";

const EndSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-white text-center">
      {/* Text */}
      <div className="w-full text-center font-[600] flex justify-center items-center px-4 sm:px-6 md:px-10">
        <p className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[47px] 
                     leading-[34px] sm:leading-[44px] md:leading-[54px] lg:leading-[61px] 
                     max-w-7xl text-[#333]">
          We hope you enjoyed reviewing our portfolio. If you need to see something more specific to your
          fields, please don’t hesitate to ask.
        </p>
      </div>

      {/* Thank you heading */}
      <h2 className="inline-block mt-8 sm:mt-20 bg-[#00FF9C] text-black font-[800] 
                     text-[20px] sm:text-[28px] md:text-[36px] lg:text-[43px] py-4 px-4 sm:px-6 
                     rounded-md text-center">
        Thank you for your time!
      </h2>

      {/* Contact Button */}
      <div className="text-center justify-center flex pt-6 sm:pt-8 lg:pt-14 px-4">
        <button
          className="relative flex items-center justify-center rounded-lg border-[5px] border-black hover:border-transparent 
                     px-4 sm:px-6 md:px-6 py-2 sm:py-5 font-worksans text-black transition-all duration-500 
                     group max-w-full"
        >
          {/* Normal text */}
          <span
            className="transition-all text-sm sm:text-lg md:text-[22px] lg:text-3xl 
                       duration-500 group-hover:opacity-0 whitespace-nowrap font-semibold"
          >
            Contact us
          </span>

          {/* Hover text */}
          <span
            className="absolute opacity-0 font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] 
                       transition-all duration-500 group-hover:opacity-100 
                       group-hover:shadow-[0_0_20px_4px_rgba(0,255,170,0.9)] 
                       bg-white rounded-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 border-[5px] border-black whitespace-nowrap"
          >
            Fill out the brief
          </span>
        </button>
      </div>
    </section>
  );
};

export default EndSection;
