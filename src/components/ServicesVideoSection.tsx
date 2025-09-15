import React from "react";

// 🔹 Import videos from assets
import video1 from "../assets/cookies.mp4";
import video2 from "../assets/santa_video.mp4";
import video3 from "../assets/yung-candidtes_soundadded.mp4";
import video4 from "../assets/dpd1.mp4";
import video5 from "../assets/ingram_nowe_czerwiec.mp4";

const VideoGrid: React.FC = () => {
  return (
    <section className="bg-[#00FF9C] px-5 xl:px-10 py-20 2xl:px-14">
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
  );
};

export default VideoGrid;
