import React from "react";

// images ko one by one import karein
import social1 from "../assets/social1.png";
import social2 from "../assets/social2.png";
import social3 from "../assets/social3.png";
import social4 from "../assets/social4.png";
import social5 from "../assets/social5.png";
import social6 from "../assets/social6.png";
import social7 from "../assets/social7.png";

const images = [social1, social2, social3, social4, social5, social6, social7];

const PostsSection: React.FC = () => {
  return (
    <section className="2xl:pt-20 pt-10 xl:mx-10 mx-5">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`post-${index + 1}`}
            className="w-full rounded-lg break-inside-avoid border-[5px] border-[#00FF9C] hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default PostsSection;
