import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import CtaSection from "components/CtaSection";

function HeroSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
          className="has-text-centered"
        />
        <br />
        <br />
        <CtaSection
          color="dark"
          size="large"
          backgroundImage="/headphone.jpg"
          backgroundImageOpacity={0.8}
          title="Let us Converse... "
          buttonText="Explore"
          buttonColor="white"
          buttonInverted={false}
          buttonPath="/#explore"
        />
      </div>
    </Section>
  );
}

export default HeroSection;
