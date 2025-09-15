import React from "react";
import logo from "../assets/kwadrat-na-strone-01.png"; // import the logo

const Footer = () => {
  return (
    <footer className="bg-[#00FF9C] text-black pt-20 pb-8 px-6 md:px-12 lg:px-20 mt-36">
      <div className="max-w-full flex flex-col sm:flex-row flex-wrap justify-evenly gap-8">

        {/* Logo + Social */}
        <div className="flex flex-col items-center sm:items-start">
          <div className=" mb-4">
            <img className="w-[223px] sm:w-[137px] rounded-lg" src={logo} alt="Logo" />
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start pt-4">
            <a href="#" className="text-black hover:text-gray-700">
              <i className="fa-brands fa-facebook text-[28px]"></i>
            </a>
            <a href="#" className="text-black hover:text-gray-700">
              <i className="fa-brands fa-square-instagram text-[28px]"></i>
            </a>
            <span className="text-lg">Follow us!</span>
          </div>
        </div>

        {/* Timings */}
        <div className="text-center sm:text-left text-[14px]">
          <h3 className="font-bold text-[26px]">We are open!</h3>

          {/* Large screen */}
          <div className="hidden sm:block sm:flex gap-10 item-center pt-6">
            <div className="flex justify-center sm:justify-start">
              <p className="font-bold">Monday -</p>
              <p className="font-bold">Friday</p>
              
            </div>
            <div className="flex justify-center sm:justify-start">
              <p>08:00 -</p>
              <p>16:00</p>
            </div>
          </div>

          {/* Small screen */}
          <div className="block sm:hidden mb-6">
            <div className="flex gap-4 justify-center sm:justify-start mt-6">
              <p className="font-bold">Monday - Friday</p>
              <p>08:00 - 16:00</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left text-[14px]">
          <div className="mb-3">
            <p className="font-bold flex justify-center sm:justify-start items-center gap-2">
              <i className="fa-regular fa-envelope-open"></i> E-mail us here:
            </p>
            <p className="break-all">hi@luckymedia.marketing</p>
          </div>

          <div className="mb-3">
            <p className="font-bold flex justify-center sm:justify-start items-center gap-2 mt-4">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp/call here:
            </p>
            <p>+48 533 630 356</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-8 text-center sm:text-left">
          {/* <a href="#" className="font-bold">Site map</a> */}
          <a href="#" className="font-bold">Privacy policy</a>
          <a href="#" className="font-bold">Cookies policy</a>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-8 px-4">
        All rights reserved: Lucky Media www.luckymedia.marketing ©
      </div>
      
    </footer>
    
  );
};

export default Footer;
