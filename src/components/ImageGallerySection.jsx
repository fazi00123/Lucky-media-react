import React from "react";

// Import images locally
import Img1 from "../assets/8-12-scaled.jpg";
import Img2 from "../assets/2-scaled.jpg";
import Img3 from "../assets/3-scaled.jpg";
import Img4 from "../assets/doplakatu-2-scaled.jpg";

const ImageGallerySection = () => {
  const images = [Img1, Img2, Img3, Img4];

  return (
    <section className="bg-[#00FF9C] 2xl:py-28 py-20 md:px-10 px-5 xl:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:gap-14 gap-6">
        {images.map((img, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full lg:h-64 object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white bg-[#00FF9C] px-2 rounded-[100px] text-4xl font-[300]">
                +
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallerySection;
