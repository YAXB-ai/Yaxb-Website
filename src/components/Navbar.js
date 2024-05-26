import React, { useState } from "react";
import Link from "next/link";
import SimpleModal from "components/SimpleModal"
import ContactSection from "./ContactSection";
import ContactPage from "pages/contact";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <nav
      className={
        "navbar" +
        (props.color ? ` is-${props.color}` : "") +
        (props.spaced ? " is-spaced" : "")
      }
    >
      <div className="container" id="top">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link href="/">
              <a>
                <img className="image" src={props.logo} alt="Logo" />
              </a>
            </Link>
            <h1 class="title">YAXB.AI</h1>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <Link href="/#about">
              <a className="navbar-item">About</a>
            </Link>
            <div className="navbar-end">
              <a className="navbar-item" onClick={() => setShowModal(true)}>Contact Us</a>
                {showModal &&
                    <SimpleModal onClose={() => setShowModal(false)} title={"Hello"}>
                        <ContactPage></ContactPage>
                    </SimpleModal>
                }
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

            /*
            <Link href="/faq">
              <a className="navbar-item">FAQ</a>
            </Link>

            <a
              className="navbar-item"
              href="https://app.mysite.com/auth/signin"
            >
              Sign in
            </a>
            <div className="navbar-item">
              <a
                className="button is-primary"
                href="https://app.mysite.com/auth/signup"
              >
                Sign Up
              </a>
            </div>*/
