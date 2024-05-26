import React from "react";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";


function FeaturesSection(props) {
  const items = [
    {
      title: "Chat",
      description:
        "Interactive chat with Yaxb fetches the answer one's looking. It features multi-lingual capabilities with contextual memory making the communication very effective.",
      iconClass: "fas fa-comments",
      iconColor: "primary",
    },
    {
      title: "Video",
      description:
        "Yaxb information retrieval goes beyond just the plain text into videos and  images. This enriches the experience of the conversation with pictures and images popping up in the interaction stepping the users into a meta verse.",
      iconClass: "fas fa-video",
      iconColor: "danger",
    },
    {
      title: "Audio",
      description:
        "Human like conversation makes the experience realistic and more connected with Yaxb. It emotes with fillers that makes the interaction very lively comforting the users to loosen up.",
      iconClass: "fas fa-volume-up",
      iconColor: "info",
    },
    {
      title: "Gestures",
      description:
        "We are striving to enable conversation enabled with Gestures for instruction mapping. This helps make for interesting methods for shorter and quicker signal processing.",
      iconClass: "fas fa-american-sign-language-interpreting",
      iconColor: "success",
    },
  ];

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container" id="about">
      <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <div className="columns is-vcentered is-desktop">
          <div className="column">
            <figure className="FeaturesSection__image image">
              <img src={props.image} alt="Illustration" />
            </figure>
          </div>
          <div className="column is-1" />
          <div className="column is-5-desktop">
            {items.map((item, index) => (
              <div
                className="FeaturesSection__feature columns is-vcentered is-variable is-4 is-mobile"
                key={index}
              >
                <div className="column is-narrow">
                  <div
                    className={`FeaturesSection__icon icon has-text-${item.iconColor}`}
                  >
                    <i className={`${item.iconClass}`} />
                  </div>
                </div>
                <div className="column">
                  <h3 className="FeaturesSection__title title has-text-weight-bold is-spaced is-5">
                    {item.title}
                  </h3>
                  <p className="subtitle is-6 has-text-grey">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
