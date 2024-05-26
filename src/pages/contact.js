import React from "react";
import Meta from "components/Meta";
import ContactSection from "components/ContactSection";

function ContactPage(props) {
  return (
    <>
      <Meta title="Contact" />
      <ContactSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Contact Us"
        subtitle="We strive to make our customers happy! Please try Yaxb to compose the mail for you to get the AI experience."
        buttonText="Send message"
        buttonColor="primary"
        buttonInverted={false}
        showNameField={false}
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5986.937930726973!2d77.642682075591!3d12.921737057012697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149bf99f2da3%3A0x10ba0301a7c3846c!2sAgara%20Shri%20Jagannatha%20Swamy%20Temple!5e0!3m2!1sen!2sin!4v1716053458312!5m2!1sen!2sin"
      />
    </>
  );
}

export default ContactPage;
