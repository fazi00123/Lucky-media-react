import React, { useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Layers,
  BookOpen,
  Wrench,
  Phone,
} from "lucide-react";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menu items with icons + colors
  const sections = [
    { id: "home", label: "Home", icon: <Home size={24} />, className: "bg-gray-800 text-white" },
    { id: "experience", label: "Our Experience", icon: <User size={24} />, className: "bg-teal-600 text-white" },
    { id: "pictorial", label: "Pictorial Mark", icon: <Layers size={24} />, className: "bg-yellow-500 text-black" },
    { id: "social", label: "Social media", icon: <BookOpen size={24} />, className: "bg-orange-500 text-white" },
    { id: "websites", label: "New Website", icon: <Wrench size={24} />, className: "bg-red-500 text-white" },
    { id: "Political", label: "Political Campaign", icon: <Briefcase size={24} />, className: "bg-green-500 text-white" },
    { id: "contact", label: "Contact Us", icon: <Phone size={24} />, className: "bg-sky-500 text-white" },
  ];

  // Smooth scroll function
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div>
      {/* Open Button - Center Left */}
      {!isOpen && (
        <button
          className="fixed top-1/2 -translate-y-1/2 z-[9999] bg-[#00FF9C] text-white px-2 py-1 text-2xl rounded"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-36 shadow-2xl transform bg-white ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-[9999]`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-3 bg-white border-b">
          <button
            className="bg-[#00FF9C] text-white px-3 py-1 rounded"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col">
          {sections.map((section) => (
            <li
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`flex flex-col items-center justify-center text-center gap-1 px-4 py-3 cursor-pointer hover:opacity-80 transition ${section.className}`}
            >
              {section.icon}
              <span className="text-sm font-semibold">{section.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
