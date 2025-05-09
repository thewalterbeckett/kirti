import React from "react";

const Header = () => {
  return (
    <header id="header" className="header">
      <nav className="mx-width grid:4">
        <div className="hidden">
          <a className="h4 nav-link" href="/" id="home">
            Kirti Shreyaa
          </a>
        </div>
        <div></div>
        <div className="cluster:l"></div>
        <div className="hidden menu-desktop">
          <a className="h4 nav-link menu-desktop" href="#contact">
            Contact
          </a>
        </div>
        <button className="menu-icon menu-toggle" aria-label="Menu">
          <div></div>
          <div></div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
