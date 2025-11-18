import React from "react";

import Powerflameslider from "./Powerflameslider";
// import SocialSlider from "./SocialSlider";

import powerImage from "../assets/powerflamelogo.png"; // ✅ React me image import karna best hai
import powerimg from "../assets/powerimg.png";
import powerimg1 from "../assets/powerimg1.png";
import powervideo from "../assets/PFW2.webm";
import videoMockup from "../assets/Object_6.webm";


// 🔹 Import videos from assets
import video1 from "../assets/procesoperator.mp4";
import video2 from "../assets/friday_reachtruck.mp4";
import video3 from "../assets/anniversary-animation-2-1.mp4";
import video4 from "../assets/followus1.mp4";
import video5 from "../assets/Messenger-animation.mp4";

import advideo from "../assets/Ad video.webm"

// post images 
import postimg1 from "../assets/TikTok-result (1).png"
import postimg2 from "../assets/ads-result (1).png"
import postimg3 from "../assets/TT.png"
import postimg4 from "../assets/Ads results (2).png"
import postimg5 from "../assets/Ads results (3).png"
import postimg6 from "../assets/Ads results (4).png"
import postimg7 from "../assets/ad result 5.png"
import postimg8 from "../assets/ads-result (6).png"
import postimg9 from "../assets/Ads results (7).png"


import emailimg from "../assets/email.png"

const Powerflame: React.FC = () => {
  return (
    <>
    <section id="advertising" className="w-full flex flex-col lg:flex-row mt-20 sm:mt-16 md:mt-20 lg:mt-28">
      {/* 🔸 Left Side: Image */}
      <div className="bg-[#00FF9C] flex justify-center items-center w-full lg:w-1/2 py-16 md:py-16 lg:p-14">
        <img
          src={powerImage}
          alt="Online Advertising"
          className="w-[254px] md:w-auto"
        />
      </div>

      {/* 🔸 Right Side: Text Content */}
      <div className="bg-black/90 text-white w-full lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center">
        {/* Subheading */}
        <h2
          className="inline-block rounded-md 
          px-3 sm:px-5 py-3 lg:text-2xl text-xl font-extrabold flex justify-center rounded-lg bg-[#00ff9c] lg:leading-[41px] leading-[27px] text-black mt-16"
        >
          Permanent cooperation
        </h2>

        {/* Paragraph */}
        <p
          className="mt-10 sm:mt-8 md:mt-10 lg:mt-12 
          text-sm sm:text-lg md:text-xl lg:text-2xl 
          leading-[24px] sm:leading-[30px] md:leading-[36px] lg:leading-[41px] mb-10"
        >
          We partnered with Power Flame to rebuild their brand from the ground up - starting with a cohesive marketing strategy, complete rebranding, online campaigns, and sales outsourcing. Our unusual approach to an everyday product turned something as ordinary as heating pellets into a distinct and memorable brand that stood out in the market - achieving visible success within just six months.
        </p>
      </div>
    </section>
    
    {/* new website desihn  */}
<section>
      <div>
        {/* 🔸 Heading */}
        <div className="text-center w-full items-center justify-center flex mt-10 sm:mt-16 md:mt-20 lg:mt-28">
          <h2
            className="text-center bg-[#00FF9C] text-black font-[800] 
              text-[25px] sm:text-[32px] md:text-[40px] lg:text-[50px] 
              py-2 px-4 rounded-lg mb-4"
          >
            New website design
          </h2>
        </div>

        {/* 🔸 Description */}
        <p
          className="text-center 
            text-sm sm:text-lg md:text-xl lg:text-2xl
            px-5 sm:px-10 md:px-20 lg:px-[120px] 
            leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[43px] 
            mt-6 mb-20 sm:mt-8 md:mt-10"
        >
          A memorable, informative, and conversion-driven design. Built to highlight Power Flame’s expertise with clear    <br className="2xl:block hidden" />   structure, solid content, and a professional visual identity that builds trust and recognition.
        </p>
      </div>

{/* images  */}
      <div className="bg-[#00FF9C]">
        <div className="flex">
        <div>
            <img src={powerimg} alt="" className="w-full" />
        </div>
        <div>
            <img src={powerimg1} alt="" className="w-full" />
        </div>
        </div>
      </div>
</section>


      {/* paragraph and laptop video  */}

      <section>
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 2xl:mt-56 mt-10 md:mt-16">
              {/* 🔸 Left Side Content */}
              <div className="lg:w-1/2 w-full text-center lg:text-left px-5 sm:px-8 md:px-12 xl:px-16 mb-10 md:mb-20 lg:mb-0">
                {/* 🔹 Description */}
                <p
                  className="text-[#171717] 2xl:leading-10 lg:leading-[36px] leading-6 sm:leading-8 
                    text-sm sm:text-lg lg:text-xl 2xl:text-[22px] pt-6"
                >
                  The new WordPress & WooCommerce eCommerce website was built to combine strong visuals with functionality. It features detailed, appealing product descriptions, an integrated blog section for SEO and brand storytelling, and custom-made product videos to enhance engagement. A key focus was placed on clearly presenting pellet specifications, making essential technical details easily accessible for users seeking a reliable and trustworthy product. Strong, well-crafted copy reinforces the company’s values and builds customer trust in the quality it represents.
                </p>
              </div>
      
              {/* 🔸 Right Side Video Box */}
              <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
                {/* 🔹 Video Container */}
                <div
                  className="bg-[#00FF9C] 
                    rounded-tl-[40px] sm:rounded-tl-[50px] md:rounded-tl-[60px] 
                    rounded-bl-[40px] sm:rounded-bl-[50px] md:rounded-bl-[60px] 
                    p-4 sm:p-6 w-[90%] md:ml-20 ml-12 lg:ml-0 md:w-full  
                    relative h-[200px] sm:h-[350px] md:h-[300px] lg:h-[300px] 2xl:h-[420px]"
                >
                  {/* 🔹 Inner Video Box */}
                  <div
                    className="absolute w-[90%] sm:w-[85%] 2xl:w-[80%] 
                      right-3 sm:right-0 md:right-0 lg:left-1/2 lg:-translate-x-1/2 
                      2xl:-top-20 md:-top-16 -top-10"
                  >
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source
                        src={powervideo}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </section>

{/* Online presence scetion  */}
          <section>
      <div className="bg-black flex flex-col lg:flex-row py-20 mt-16 lg:mt-24 2xl:mt-40">
        {/* 🔸 Left Content */}
        <div className="w-full lg:w-1/3">
          {/* Heading */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-12 2xl:pl-24">
            <h2 className="inline-block text-2xl sm:text-4xl md:text-[44px] lg:text-5xl xl:text-[40px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
             Online presence
            </h2>
          </div>

          {/* Mobile Video Mockup */}
          <div className="flex justify-center md:justify-start mt-28 lg:mt-32">
            <div
              className="bg-[#00FF9C] rounded-tr-[30px] sm:rounded-tr-[40px] md:rounded-tr-[50px] 
                          rounded-br-[30px] sm:rounded-br-[40px] md:rounded-br-[50px] 
                          p-4 sm:p-6 w-[85%] 
                          relative h-[180px] sm:h-[220px] md:h-[460px] lg:h-[220px] 2xl:h-[340px]"
            >
              <video
                loop
                autoPlay
                muted
                playsInline
                className="w-full rounded-xl -mt-28"
              >
                <source src={videoMockup} type="video/webm" />
              </video>
            </div>
          </div>
        </div>

        {/* 🔸 Right Content */}
        <div className="w-full lg:w-2/3 mt-24 lg:mt-0 md:px-4 px-5">
          {/* Swiper Slider */}
          <Powerflameslider />

          {/* Description */}
          <div className="text-center flex justify-center mt-10">
            <p className="text-white text-[15px] sm:text-lg md:text-xl leading-[28px] md:leading-[36px] text-center md:w-[80%]">
              We placed strong emphasis on building a consistent and recognizable online presence. From the start, we created a cohesive visual identity supported by product photoshoots and video recordings, which we continue to use across all social media channels. This unified approach not only strengthens brand recognition but also drives sales, proving how much consistency in visual communication truly matters. By taking a unique approach to a routine product, we turned heating pellets into a strong, recognizable brand with clear market differentiation.
            </p>
          </div>
        </div>
      </div>
    </section>

{/* video grid section  */}
     <section className="bg-[#00FF9C] px-5 xl:px-10 2xl:py-28 py-20 2xl:px-14">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10">
        
        <div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className=""
            src={video1}
          />
        </div>

        <div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className=""
            src={video2}
          />
        </div>

        <div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className=""
            src={video3}
          />
        </div>

        <div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className=""
            src={video4}
          />
        </div>

        <div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className=""
            src={video5}
          />
        </div>

      </div>
    </section>

{/* Ad Performance & Results section  */}
     <section>
          <div className="flex flex-col lg:flex-row items-center gap-12 2xl:gap-24 mt-16 2xl:mt-24">
            {/* ================= Left Side Content ================= */}
            <div className="w-full lg:w-1/2 text-center  px-5 sm:px-12 lg:px-0 lg:pl-12 xl:pl-16">
              {/* Section Title */}
              <div className="flex justify-center lg:justify-start">
                <h3 className="inline-block text-2xl sm:text-[36px] md:text-[42px] 2xl:text-[50px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
                  Ad Performance & Results
                </h3>
              </div>
    
              {/* Paragraph Content */}
              <div>
                <p className="text-[#171717] leading-[28px] sm:leading-[32px] md:leading-[36px] 2xl:leading-10
                           text-sm sm:text-base md:text-xl 2xl:text-2xl
                           lg:text-start text-center mt-8 sm:mt-12 md:mt-16">
                  We ran campaigns across Facebook, Instagram, Google, and TikTok, tailoring content to match the interests and behavior of Power Flame’s audience. Our organic TikTok videos went viral, building strong brand awareness, while paid campaigns on Facebook and Google generated significant sales and traffic. We also managed the Google Merchant Center, ensuring seamless product visibility across all channels. This strategic, audience-focused approach proved that the right message, delivered on the right platforms - truly hits. We love this example of multi-channel marketing, where every action, from content creation to campaign optimization, directly impacts measurable results.
                </p>
              </div>
             
            </div>
    
            {/* ================= Right Side Video/Image Box ================= */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-10 sm:mt-16 md:mt-28 lg:mt-44 2xl:mt-56 ">
          {/* 🔹 Video Container */}
          <div
            className="bg-[#00FF9C] 
              rounded-tl-[40px] sm:rounded-tl-[50px] md:rounded-tl-[60px] 
              rounded-bl-[40px] sm:rounded-bl-[50px] md:rounded-bl-[60px] 
              p-4 sm:p-6 w-[90%] 2xl:w-full  
              relative h-[200px] sm:h-[350px] md:h-[400px] lg:h-[300px] 2xl:h-[420px] ml-auto 2xl:mt-48"
          >
            {/* 🔹 Inner Video Box */}
            <div
              className="absolute 2xl:w-[780px] xl:w-[480px] lg:w-[380px] w-[90%] 
                right-3 sm:right-0 md:right-0 lg:left-1/2 lg:-translate-x-1/2 
                h-[200px] sm:h-[280px] md:h-[460px] lg:h-[480px] 2xl:h-[780px] 
                top-[-40px] sm:top-[-90px] md:top-[-120px] lg:top-[-220px] xl:top-[-220px] 2xl:-top-[100%]
               "
            >
              <video
                className="w-full h-full object-cover lg:rounded-[40px] rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src={advideo}
                  type="video/webm"
                />
              </video>
            </div>
          </div>
        </div>
          </div>
        </section>


        {/* post section  */}
         <section className="p-6">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 2xl:gap-10">
        <a
          href=""
          target="_blank"
          rel=""
        >
          <img
            src={postimg9}
            alt="post-1"
            className="mb-6 2xl:mb-10 w-full break-inside-avoid "
          />
        </a>

        <a
          href=""
          target="_blank"
          rel=""
        >
          <img
            src={postimg2}
            alt="post-2"
            className="mb-6 2xl:mb-10 w-full break-inside-avoid "
          />
        </a>

        <a
          href=""
          target="_blank"
          rel=""
        >
          <img
            src={postimg3}
            alt="post-3"
            className="mb-6 2xl:mb-10 w-full break-inside-avoid "
          />
        </a>

        <a
          href=""
          target="_blank"
          rel=""
        >
          <img
            src={postimg4}
            alt="post-4"
            className="mb-6 2xl:mb-10 w-full break-inside-avoid "
          />
        </a>

        <a
          href=""
          target="_blank"
          rel=""
        >
          <img
            src={postimg5}
            alt="post-5"
            className="mb-6 2xl:mb-10 w-full break-inside-avoid "
          />
        </a>

        <a
          href=""
          target="_blank"
          rel=""
        >
          <img
            src={postimg6}
            alt="post-6"
            className="mb-6 2xl:mb-10 w-full break-inside-avoid "
          />
        </a>

        <a
          href=""
          target="_blank"
          rel=""
        >
          <img
            src={postimg7}
            alt="post-7"
            className="mb-6 2xl:mb-10 w-full break-inside-avoid "
          />
        </a>

        <a
          href=""
          target="_blank"
          rel=""
        >
          <img
            src={postimg8}
            alt="post-8"
            className="mb-6 2xl:mb-10 w-full break-inside-avoid "
          />
        </a>

        <a
          href=""
          target="_blank"
          rel=""
        >
          <img
            src={postimg9}
            alt="post-9"
            className="mb-6 2xl:mb-10 w-full break-inside-avoid "
          />
        </a>
      </div>
    </section>


    <section>
      <div className="bg-[#171717] mt-28">
        {/* ================= Branding Text Content ================= */}
        <p
          className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl 
                     px-4 sm:px-10 md:px-16 lg:px-20 2xl:px-36 
                     py-8 sm:py-12 md:py-16 lg:py-24 
                     text-white leading-[43px] sm:leading-[34px] md:leading-[42px] lg:leading-[50px]"
        >
          In the end, every number here reflects a creative decision that worked - transforming visuals into measurable business results. These outcomes aren’t just data points; they’re proof of strategy, consistency, and design thinking applied with purpose. Each campaign insight helps us refine, evolve, and push the boundaries of what effective visual communication can achieve.
        </p>
        {/* ================= End Branding Text Content ================= */}
      </div>
      
    </section>


         <section>
          <div className="flex flex-col lg:flex-row items-center gap-12 2xl:gap-24 mt-16 2xl:mt-24">
            {/* ================= Left Side Content ================= */}
            <div className="w-full lg:w-1/2 text-center  px-5 sm:px-12 lg:px-0 lg:pl-12 xl:pl-16">
              {/* Section Title */}
              <div className="flex justify-center lg:justify-start">
                <h3 className="inline-block text-2xl sm:text-[36px] md:text-[42px] 2xl:text-[50px] font-bold text-black bg-[#00ff99] px-3 sm:px-5 py-3 sm:py-6 rounded-lg">
                  Email Campaigns
                </h3>
              </div>
    
              {/* Paragraph Content */}
              <div>
                <p className="text-[#171717] leading-[28px] sm:leading-[32px] md:leading-[36px] 2xl:leading-10
                           text-sm sm:text-base md:text-xl 2xl:text-2xl
                           lg:text-start text-center mt-8 sm:mt-12 md:mt-16">
                  We developed and managed B2C email and SMS campaigns in Poland, leveraging a large, pre-built database of potential customers to deliver personalized, high-converting messages. Our targeted SMS outreach allowed us to reach audiences instantly with timely offers and product updates. <br />
In addition, we executed numerous email campaigns for the Dutch and Belgian markets, adapting content and tone to each region’s preferences. This strategic approach ensured consistent communication, strong engagement, and measurable sales growth across all markets.
                </p>
              </div>
             
            </div>
    
            {/* ================= Right Side Video/Image Box ================= */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
         <div>
          <img src={emailimg} alt="" />
         </div>
        </div>
          </div>
        </section>

    </>
  );
};

export default Powerflame;
