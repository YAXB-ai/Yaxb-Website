import React from "react";
import Meta from "components/Meta";
import VideoSection from "components/VideoSection";
import StatsSection from "components/StatsSection";

function YaxbPage(props) {
  return (
    <>
      <Meta title="Yaxb" />
      <VideoSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Your title here"
        subtitle=""
        embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
      />
      <StatsSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
      />
    </>
  );
}

export default YaxbPage;
