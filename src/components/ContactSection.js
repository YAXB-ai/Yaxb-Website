import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Contact from "components/Contact";

function ContactSection(props) {
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
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <div className="columns">
          <div className="column">
            <iframe
              className="ContactSection__map has-background-light"
              title="Map"
              frameBorder={0}
              src={props.embedSrc}
            />
          </div>
          <div className="column">
            <Contact
              showNameField={props.showNameField}
              buttonText={props.buttonText}
              buttonColor={props.buttonColor}
              buttonInverted={props.buttonInverted}
              
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
