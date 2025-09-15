import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../assets/karty-najnowsze.json"; // JSON path

const ContactSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-28 py-10 lg:py-20 mt-14">
      <div className="lg:border-4 border border-black flex flex-col xl:flex-row w-full rounded-2xl sm:p-10 lg:p-12 gap-10">
        
        {/* Left Text */}
        <div className="w-full xl:w-2/5  text-center lg:text-left">
          <h2 className="text-[25px] sm:text-[40px] md:text-[50px] lg:text-[59px] font-[800] leading-tight 2xl:mb-32 mb-14">
            It might be your <br className="2xl:block hidden" />
            <span className="text-[#00ff99]">lucky draw!</span> <br className="2xl:block hidden" />
            Contact us today.
          </h2>

          {/* Lottie Animation */}
          <div className="2xl:w-[550px] 2xl:h-[350px] xl:h-[280px] 2xl:pl-12">
          <Lottie
            loop
            play
            animationData={animationData}
            // style={{ width: 300, height: 300 }}
          />
          </div>

          <p className="text-base md:text-[22px] lg:text-2xl 2xl:text-3xl leading-[28px] sm:leading-[36px] md:leading-[44px] lg:leading-10 2xl:leading-[60px] font-normal mt-4 text-[#171717] px-5 md:px-0">
            Your business seems to be stuck at some level? Maybe you are about
            to finalize your dream ideas and kick off with a new venture? Let
            us know what’s on your mind, and we’ll see how we can assist you.
          </p>
        </div>

        {/* Form */}
        <div className="w-full xl:w-3/5">
          <form className="space-y-5 bg-[#e8e8e8] border border-black/10 rounded-2xl p-4 sm:p-5 md:p-16 2xl:p-24 shadow-sm sm:border-[1px] md:border-[5px]">
            <p className="text-[14px] mb-6 text-gray-500">
              Book a video meeting <span className="text-black"><a href="https://luckymedia.marketing/booking-calendar/">here.</a></span>
            </p>
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">Your name</label>
              <input id="name" type="text" className="w-full rounded-lg border px-4 py-3" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-2">Your email</label>
              <input id="email" type="email" className="w-full rounded-lg border px-4 py-3" />
            </div>
            <div>
              <label htmlFor="subject" className="block font-semibold mb-2">Subject</label>
              <input id="subject" type="text" className="w-full rounded-lg border px-4 py-3" />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-2">Your message (optional)</label>
              <textarea id="message" rows={6} className="w-full rounded-lg border px-4 py-3"></textarea>
            </div>
            <div>
              <p className="font-bold">Permission to store your information</p>
            </div>
            <div>
              <label className="flex items-start gap-3">I agree to the processing of my personal data in accordance with the Privacy Policy</label>
            </div>
            <div>
              <label className="flex items-start gap-3 font-bold">
                <input type="checkbox" className="mt-1" /> To be contacted regarding my inquiry.
              </label>
            </div>
            <div>
              <label className="flex items-start gap-3 font-bold">
                <input type="checkbox" className="mt-1" /> To receive marketing and promotional information.
              </label>
            </div>
            <div>
              <button className="w-full mt-6 border-[5px] border-black bg-black text-white hover:text-[#00ff99] rounded-lg transition duration-500 hover:border-black hover:shadow-[0_0_30px_8px_rgba(0,255,170,0.9)] text-[17px] sm:text-[20px] md:text-[28px] lg:text-[35px] py-3 sm:py-4 md:py-0">
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
