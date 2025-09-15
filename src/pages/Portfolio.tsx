import React from "react";
import Navbar from "../components/Navbar";
import WorkShowcase from "../components/WorkShowcase";
import OnlineAdvertising from "../components/OnlineAdvertising";
import OurExperience from "../components/OurExperience";
import PermanentCooperation from "../components/PermanentCooperation";
import BrandConsistency from "../components/BrandConsistency";
import PictorialMark from "../components/PictorialMark";
import SocialMedia from "../components/SocialMedia";
import VideoGrid from "../components/VideoGrid";
import PaidAds from "../components/PaidAds";
import BrandingExcellence from "../components/BrandingExcellence";
import QuickBrandBooster from "../components/QuickBrandBooster";
import NewWebsite from "../components/NewWebsite";
import Simulation from "../components/Simulation";
import LogoAnimationSection from "../components/LogoAnimationSection";
import MediaGridSection from "../components/MediaGridSection";
import SelfLabSection from "../components/SelfLabSection";
import ZrobBatanoiSection from "../components/ZrobBatanoiSection";
import PublicRelationSection from "../components/PublicRelationSection";
import PoliticalCompaign from "../components/PoliticalCompaign";
import ImageGallerySection from "../components/ImageGallerySection";
import ContentManagment from "../components/ContentManagment";
// import SocialMediaPostsSection from "../components/SocialMediaPostsSection";
import BradingAdvertising from "../components/BradingAdvertising";
import SamsaraSection from "../components/SamsaraSection";
import CustomDesignSection from "../components/CustomDesignSection";
import VideoAdvertising from "../components/VideoAdvertising";
import WorkToday from "../components/WorkToday";
import AudianceSection from "../components/AudianceSection";
import WebsiteFormSection from "../components/WebsiteFormSection";
import Social from "../components/Social";
import ServicesVideoSection from "../components/ServicesVideoSection";
import EndSection from "../components/EndSection";

import Footer from "../components/Footer";

const Portfolio: React.FC = () => {
  return (
    <>
      <Navbar />
      <WorkShowcase />
       <OnlineAdvertising />
        <OurExperience />
        <PermanentCooperation />
        <BrandConsistency />
        <PictorialMark />
       < SocialMedia />
       <VideoGrid />
       <PaidAds />
        <BrandingExcellence />
        <QuickBrandBooster />
        <NewWebsite />
        <Simulation />
        <LogoAnimationSection />
        <MediaGridSection />
        <SelfLabSection />
        <ZrobBatanoiSection />
        <PublicRelationSection />
        <PoliticalCompaign />
        <ImageGallerySection />
        <ContentManagment />
        {/* <SocialMediaPostsSection /> */}
        <BradingAdvertising />
        <SamsaraSection />
        <CustomDesignSection />
        <VideoAdvertising />
        <WorkToday />
        <AudianceSection />
        <WebsiteFormSection />
        <Social />
        <ServicesVideoSection />
        <EndSection />

      <Footer />
    </>
  );
};

export default Portfolio;
