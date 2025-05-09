import React from "react";

const Contact = () => {
  return (
    <div id="footer__wrapper" className="g-wrapper">
      <div className="mx-width underlay">
        <div className="grid:2 g-wrapper">
          <div className="grid:2">
            <div></div>
            <div></div>
          </div>
          <div className="grid:2">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="cover" id="footer">
        <div></div>
        <div className="mx-width stack:l center gsap">
          <p className="h4">Wanna connect?</p>
          <h2 className="h1 text:center font-accent">
            LET’S CREATE
            <br />
            GREAT&nbsp;THINGS&nbsp;
            <span className="italic">together.</span>
          </h2>
          <div>
            <a href="mailto:" className="btn-1">
              <span className="__cf_email__">kirtishreya2000@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <div id="footer__color"></div>
    </div>
  );
};

export default Contact;
