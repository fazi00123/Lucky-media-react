import React, { useState } from "react";

// Import images
import advImg from "../assets/reklama-01.png";
import flextodayImg from "../assets/logo_blue_Obszar-roboczy-1-1.png";
import fitditaImg from "../assets/fitdieta.png";
import selfImg from "../assets/selflab.png";
import konImg from "../assets/konfederacja.png";
import samsaraImg from "../assets/blackwhite-480x471.png";
import worktodayImg from "../assets/black1.png";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "advertising", label: "advertising", img: advImg, className: "bg-[#00ff9c] text-white" },
    { id: "flextoday", label: "flextoday", img: flextodayImg, className: "bg-white text-black" },
    { id: "fitdieta", label: "fitdieta", img: fitditaImg, className: "bg-[#00ff9c] text-white" },
    { id: "selflab", label: "selflab", img: selfImg, className: "bg-white text-white" },
    { id: "konfederacja", label: "konfederacja", img: konImg, className: "bg-[#00ff9c] text-white" },
    { id: "samsara", label: "samsara", img: samsaraImg, className: "bg-white text-white" },
    { id: "worktoday", label: "worktoday", img: worktodayImg, className: "bg-[#00ff9c] text-white" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Open Button */}
      {!isOpen && (
        <button
          className="fixed top-1/2 -translate-y-1/2 z-[9999] bg-[#00FF9C] text-black px-2 py-1 text-2xl rounded"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-40 shadow-2xl transform bg-white ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-[9999]`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-3 bg-white border-b">
          <button
            className="bg-[#00FF9C] text-black px-3 py-1 rounded"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* Menu Items with Scroll */}
        <ul className="flex flex-col overflow-y-auto h-[calc(100%-60px)]">
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`flex flex-col items-center justify-center text-center gap-1 px-4 py-6 ${section.className}`}
            >
              <img src={section.img} alt={section.label} className="object-contain" />
              {/* <span className="text-sm font-semibold">{section.label}</span> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
