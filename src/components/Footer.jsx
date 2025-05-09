import React, { useState, useEffect } from "react";

const Footer = () => {
  const [time, setTime] = useState(
    new Date().toLocaleString("en-CA", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleString("en-CA", {
          timeZone: "America/New_York",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <footer>
      <div className="mx-width grid:2 g-wrapper" id="nav-bottom">
        <div>
          <a href="/cdn-cgi/l/email-protection#93fbf6fffffcd3f8f2e7fbf6e1fafdf6befff6bdf0fcfe" aria-label="Send me an email">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" fill="currentColor">
              <path d="M27.33 21.52a10.3 10.3 0 0 1-.34 10.45c-3.4.28-6.94-1.54-8.99-4.91l.17-.3c1.75-3.11 1.83-6.7.5-9.55a9.95 9.95 0 0 0 8.31 4.33h.34l.01-.02Zm-10-4.32A9.95 9.95 0 0 1 9 21.52h-.36c-1.83 3.5-1.59 7.57.36 10.44 3.4.28 6.95-1.54 8.99-4.92l-.18-.3a10.48 10.48 0 0 1-.5-9.54Zm-8.5-6.42-.18-.32A9.83 9.83 0 0 0 0 16a9.83 9.83 0 0 0 8.65 5.53l.17-.3A10.04 10.04 0 0 1 16.64 16a10 10 0 0 1-7.82-5.21ZM9 .03a10.3 10.3 0 0 0-.34 10.43H9c3.5 0 6.58 1.73 8.31 4.33a10.52 10.52 0 0 1 .51-9.54l.17-.3C15.95 1.56 12.41-.25 9 .02Zm17.98 0C23.6-.25 20.04 1.57 18 4.94l.18.3c1.75 3.11 1.83 6.7.5 9.55a9.97 9.97 0 0 1 8.31-4.33h.36A10.26 10.26 0 0 0 26.99.03Zm.36 10.45-.17.3a10.04 10.04 0 0 1-7.81 5.23 10.02 10.02 0 0 1 7.98 5.51A9.83 9.83 0 0 0 36 16a9.83 9.83 0 0 0-8.65-5.53v.01Z"></path>
            </svg>
          </a>
        </div>
        <div className="grid:2">
          <div className="cluster:l">
            <p className="h4 icon-link">✽&nbsp;Boston</p>
            <p id="timer" className="h4">
              {time}
            </p>
          </div>
          <div className="cluster:sp h4 mobile:hidden">
            <div className="cluster:l">
              <a className="nav-link hidden" href="https://www.linkedin.com/in/">
                LinkedIn
              </a>
              <a className="nav-link hidden" href="">
                Github
              </a>
            </div>
            <a href="#top" className="icon-link">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 10 16"
                role="img"
                aria-label="Back to top"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 1v14M5 1l4 4M5 1 1 5"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
