import React from "react";
import Link from "next/link";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import CenteredColumns from "components/CenteredColumns";

function ContentCardsSection(props) {
  const items = [
    {
      image:
        "/incubator.png",
      title: "Incubation Center",
      body: "We setup an Incubuation center to cultivate and nurture AI initiatives from concept stage to their evolution into impactful initiatives.",
      url: "/contact",
    },
    {
      image:
        "/tag.png",
      title: "Annotation & Curation",
      body: "We specialize in annotation and curation of the knowledge base to enable AI to produce high quality responses.",
      url: "/contact",
    },
    {
      image:
        "/agile-development.png",
      title: "Implement & Maintain",
      body: "We provide full services for implementation and long term maintenace of the AI services.",
      url: "/contact",
    },
    {
      image:
        "/conversation.png",
      title: "Consulting",
      body: "We are happy to share our experience to help lift-off on your AI Journey and jointly defining a roadmap to adapt for evolving trends in AI.",
      url: "/contact",
    },
  ];

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container" id="explore">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <CenteredColumns>
          {items.map((item, index) => (
            <div
              className="column is-half-tablet is-one-quarter-desktop"
              key={index}
            >
              <Link href={item.url}>
                <a className="ContentCardsSection__card card is-flex">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={item.image} alt={item.title} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p>{item.body}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </CenteredColumns>
      </div>
    </Section>
  );
}

export default ContentCardsSection;
