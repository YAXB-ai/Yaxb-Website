import React from "react";
import Meta from "components/Meta";
import LegalSection from "components/LegalSection";

function TermsConditionsPage(props) {
  return (
    <>
      <Meta title="Terms Conditions" />
      <LegalSection
        color="white"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        section="privacy-policy"
        key="privacy-policy"
      />
    </>
  );
}

export default TermsConditionsPage;
