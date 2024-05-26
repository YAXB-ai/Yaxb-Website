import React from "react";
import Section from "components/Section";
import CenteredColumns from "components/CenteredColumns";

function FeaturesSection2(props) {
  const items = [
    {
      title: "Have fun!",
      subtitle:
        "We've gamified everything so you feel like you're having fun when you're actually doing free work for us. Win win!",
      iconClass: "fas fa-gem",
      iconColor: "warning",
    },
    {
      title: "Charge up",
      subtitle:
        "If you want to keep having fun remember to stay charged! And by that we mean you need to buy our ERC-20 CHARGE token to keep playing.",
      iconClass: "fas fa-charging-station",
      iconColor: "danger",
    },
    {
      title: "Pick your flavor",
      subtitle:
        "Dark mode is so last year. We have a light mode and turquoise mode. Either way, your eyes are going to hurt. Don't forget to stay charged!",
      iconClass: "fas fa-adjust",
      iconColor: "primary",
    },
  ];

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <CenteredColumns>
          {items.map((item, index) => (
            <div className="column has-text-centered" key={index}>
              <div className="FeaturesSection2__feature">
                <div
                  className={`FeaturesSection2__icon icon is-size-1 has-text-${item.iconColor}`}
                >
                  <i className={`${item.iconClass}`} />
                </div>
                <h1 className="title is-4 is-spaced">{item.title}</h1>
                <h2 className="subtitle is-6 has-text-grey-darker">
                  {item.subtitle}
                </h2>
              </div>
            </div>
          ))}
        </CenteredColumns>
      </div>
    </Section>
  );
}

export default FeaturesSection2;
