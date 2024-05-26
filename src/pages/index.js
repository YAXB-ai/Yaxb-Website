import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import ContentCardsSection from "components/ContentCardsSection";
import FeaturesSection from "components/FeaturesSection";
import Footer from "components/Footer";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <Navbar
        color="white"
        spaced={true}
        logo="/icons8-artificial-64.png"
      />
      <HeroSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Meet YAXB - AI Assistant"
        subtitle="Integrate Yaxb seamlessly into your digital world and elevate the experience using AI with support of multi-modal interactions like Text, Voice, Audio, Video and Gestures"
        buttonText="Try now"
        buttonColor="primary"
        buttonInverted={false}
        buttonPath="/pricing"
      />
      <ContentCardsSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="How may we help you ?"
        subtitle=""
      />
      <FeaturesSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Yaxb Features"
        image="/chat.png"
      />
      <Footer
        color="white"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        copyright={`© ${new Date().getFullYear()} Company`}
        logo="/icons8-artificial-64.png"
      />
    </>
  );
}

export default IndexPage;
