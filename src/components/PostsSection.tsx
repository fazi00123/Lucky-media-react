import React from "react";

// images import
import social1 from "../assets/social1.png";
import social2 from "../assets/social2.png";
import social3 from "../assets/social3.png";
import social4 from "../assets/social4.png";
import social5 from "../assets/social5.png";
import social6 from "../assets/social6.png";
import social7 from "../assets/social7.png";

const PostsSection: React.FC = () => {
  return (
    <section className="p-6">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 2xl:gap-10">
        <a
          href="https://www.facebook.com/grzegorz.michal.braun/videos/1779157145917907"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social1}
            alt="post-1"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid border-[6px] border-[#00FF9C]"
          />
        </a>

        <a
          href="https://www.facebook.com/grzegorz.michal.braun/videos/1779157145917907"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social2}
            alt="post-2"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid border-[6px] border-[#00FF9C]"
          />
        </a>

        <a
          href="https://www.facebook.com/grzegorz.michal.braun/videos/1779157145917907"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social3}
            alt="post-3"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid border-[6px] border-[#00FF9C]"
          />
        </a>

        <a
          href="https://www.facebook.com/grzegorz.michal.braun/videos/1779157145917907"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social4}
            alt="post-4"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid border-[6px] border-[#00FF9C]"
          />
        </a>

        <a
          href="https://www.facebook.com/grzegorz.michal.braun/videos/1779157145917907"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social5}
            alt="post-5"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid border-[6px] border-[#00FF9C]"
          />
        </a>

        <a
          href="https://www.facebook.com/grzegorz.michal.braun/videos/1779157145917907"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social6}
            alt="post-6"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid border-[6px] border-[#00FF9C]"
          />
        </a>

        <a
          href="https://www.facebook.com/grzegorz.michal.braun/videos/1779157145917907"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social7}
            alt="post-7"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid border-[6px] border-[#00FF9C]"
          />
        </a>
      </div>
    </section>
  );
};

export default PostsSection;
