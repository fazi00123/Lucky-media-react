import React from "react";
import reklamaImage from "../assets/reklama-01.png"; // ✅ React me image import karna best hai

const OnlineAdvertising: React.FC = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row mt-20 sm:mt-16 md:mt-20 lg:mt-28">
      {/* 🔸 Left Side: Image */}
      <div className="bg-[#00FF9C] flex justify-center items-center w-full lg:w-1/2 p-4 sm:p-8 md:p-10 lg:p-14">
        <img
          src={reklamaImage}
          alt="Online Advertising"
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* 🔸 Right Side: Text Content */}
      <div className="bg-black/90 text-white w-full lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center">
        {/* Subheading */}
        <h3
          className="inline-block rounded-md px-2 sm:px-5 
          text-lg sm:text-xl md:text-[26px] 
          font-extrabold 
          leading-[20px] sm:leading-[30px] md:leading-[40px] lg:leading-[48px] 
          text-black bg-[#00FF9C] py-5 lg:py-3 mt-16"
        >
          Online advertising &amp; marketing
        </h3>

        {/* Paragraph */}
        <p
          className="mt-10 sm:mt-8 md:mt-10 lg:mt-12 
          px-8
          text-sm sm:text-lg md:text-xl lg:text-2xl 
          leading-[24px] sm:leading-[30px] md:leading-[36px] lg:leading-[41px] mb-10"
        >
          Whether it’s driving traffic, generating leads, or{" "}
          <span className="text-[#00FF9C]">closing sales,</span> we make sure
          every step is optimized for success. <br />
          We go beyond just running ads on platforms like Google, Facebook, and
          more. Our expertise in{" "}
          <span className="text-[#00FF9C]">marketing</span> automation allows us
          to integrate these campaigns into a unified system. This means your
          sales team can effortlessly manage leads and clients from one central
          hub, streamlining the entire process and maximizing efficiency.
        </p>
      </div>
    </section>
  );
};

export default OnlineAdvertising;
