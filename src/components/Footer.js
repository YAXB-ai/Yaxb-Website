import React from "react";
import Link from "next/link";
import Section from "components/Section";
import {useState} from "react";
import SimpleModal from "components/SimpleModal"
import ContactSection from "./ContactSection";
import ContactPage from "pages/contact";


function Footer(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
      className="footer"
    >
      <div className="FooterComponent__container container">
        <div className="brand left">
          <Link href="/">
            <a>
              <img src={props.logo} alt="Logo" />
            </a>
          </Link>
          <h1 class="title">YAXB.AI</h1>

        </div>
        <div className="links right">
          <Link href="/#top">
            <a>Top</a>
          </Link>
          <span><div>&nbsp;&nbsp;&nbsp;&nbsp;</div></span>
          <div className="links right">
            <a  onClick={() => setShowModal(true)}>Contact</a>
            {showModal &&
                <SimpleModal onClose={() => setShowModal(false)} title={"Hello"}>
                    <ContactPage></ContactPage>
                </SimpleModal>
            }
          </div>
        </div>
        <div className="social right">
          <a
            href="#"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-twitter" />
            </span>
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-facebook-f" />
            </span>
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-instagram" />
            </span>
          </a>
        </div>
        <div className="copyright left">
          {props.copyright}
          <Link href="/terms-conditions">
            <a>Terms</a>
          </Link>
          <Link href="/terms-conditions">
            <a>Privacy</a>
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
