import React from "react";
import AnimacjaStrona from "../assets/animacjastrona.mp4";
import FinalAnimacja from "../assets/finalanimacja.mp4";
import GridImage from "../assets/grafika.png";

const MediaGridSection = () => {
  return (
    <section>
      <div className="grid mt-[77px] md:grid-cols-2 lg:grid-cols-3 lg:px-3 xl:px-[44px] xl:py-[44px]">

        {/* First video */}
        <div className="px-5 lg:px-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-[800px]"
            src={AnimacjaStrona}
          ></video>
        </div>

        {/* Image */}
        <div className="px-5 lg:px-4 mt-6 md:mt-0">
          <img
            src={GridImage}
            alt="Media Grid"
            className="w-full"
          />
        </div>

        {/* Second video */}
        <div className="px-5 lg:px-4 mt-6 lg:mt-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-[800px]"
            src={FinalAnimacja}
          ></video>
        </div>

      </div>
    </section>
  );
};

export default MediaGridSection;
