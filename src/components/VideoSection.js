import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import VideoEmbed from "components/VideoEmbed";

function VideoSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="VideoSection__container container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <VideoEmbed url={props.embedUrl} />
      </div>
    </Section>
  );
}

export default VideoSection;
