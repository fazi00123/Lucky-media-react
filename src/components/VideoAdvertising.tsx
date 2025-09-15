import React from "react";

// Import videos
import tuktukVideo from "../assets/tuktuk.mp4";
import reviewVideo from "../assets/100_review.mp4";
import animationVideo from "../assets/animation.mp4";
import likesVideo from "../assets/100likes-size.mp4";

const VideoAdvertising: React.FC = () => {
  return (
    <section className="bg-[#00FF9C] px-10 py-20 border-b-4 border-black">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        
        {/* Video 1 */}
        <div>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={tuktukVideo}
          />
        </div>

        {/* Video 2 */}
        <div>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={reviewVideo}
          />
        </div>

        {/* Video 3 */}
        <div>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={animationVideo}
          />
        </div>

        {/* Video 4 */}
        <div>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src={likesVideo}
          />
        </div>

      </div>
    </section>
  );
};

export default VideoAdvertising;
