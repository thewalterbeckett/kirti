import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const About = () => {
  const textRef = useRef(null); // Reference to the element containing the text
  const sectionRef = useRef(null); // Reference to the wrapper section

  useEffect(() => {
    const split = new SplitText(textRef.current, { type: "words,chars" });
    const words = split.words; // Array of words

    // Create a function to trigger animation when the section is 40% visible
    const triggerAnimation = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        // Only trigger the animation if the section is 40% visible
        gsap.from(words, {
          opacity: 0,
          y: 20,
          stagger: 0.04, // Delay between each word animation
          duration: 0.8,
          ease: "power2.out", // Smooth easing for words
        });

        // Animate each letter inside the word
        words.forEach((word) => {
          const letters = word.querySelectorAll(".char");
          gsap.from(letters, {
            opacity: 0,
            y: 10,
            stagger: 0.05, // Stagger the animation of each letter inside a word
            duration: 0.6,
            ease: "power2.out",
          });
        });

        // Once the animation is triggered, disconnect the observer
        observer.disconnect();
      }
    };

    // Create an intersection observer to watch the #home__about-wrapper section
    const observer = new IntersectionObserver(triggerAnimation, {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.4, // Trigger when 40% of the section is in view
    });

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // Clean up when the component unmounts
      split.revert();
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="cover gsap relative g-wrapper"
      id="home__about-wrapper"
      ref={sectionRef} // Attach the observer to this section
    >
      <div></div>
      <div className="mx-width grid:3-1" id="home__about">
        <h2 className="h3">✺ About me</h2>
        <div className="stack:l">
          <p className="h2 font-accent" ref={textRef}>
            I'm a recent graduate from the University of Massachusetts, Dartmouth, with a deep interest in bioinformatics
            <span className="splt-wrap">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 61 73">
                <g clipPath="url(#a)">
                  <path
                    fill="url(#b)"
                    d="M8.4 57.7c2-2.8 8 1.5 10-1.3 2-2.7-4-7-2.1-9.8 2-2.8 8 1.5 10-1.2 1.9-2.8-4.2-7-2.2-9.8 2-2.8 8 1.5 10-1.3 2-2.7-4.1-7-2.2-9.8l20.7 14.6c-2 2.8-8-1.5-10 1.3-2 2.7 4 7 2.1 9.8-2 2.7-8-1.5-10 1.2-1.9 2.8 4.2 7 2.2 9.8-2 2.8-8-1.5-10 1.3-2 2.7 4.1 7 2.2 9.8L8.4 57.7Z"
                  ></path>
                </g>
                <defs>
                  <linearGradient id="b" x1="42.2" x2="18.8" y1="31.8" y2="65" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6796D4"></stop>
                    <stop offset=".5" stopColor="#FC9696"></stop>
                    <stop offset="1" stopColor="#F7B579"></stop>
                  </linearGradient>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 .5h61v71.8H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </span>
            and computational biology.
            <br />
            My expertise includes genomics, RNA-Seq
            <span className="splt-wrap">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 74 53">
                <path d="M57 24a7.3 7.3 0 0 0-7.3 8.2c1.1 8.5-13.3 8.4-12.2 0a7.3 7.3 0 0 0-7.2-8.2 7.3 7.3 0 0 0-6.8 9.3c.8 2.8-1.7 4.7-1.3 4.3-1.8 1.8-3.7.8-5.4 1-9.2.3-9 14.3.3 14.4 4.3 0 7.8-3.8 7.2-8.2-.4-3.3 1.8-6.3 6-6.3 1.4 0 3.4-.8 5.3 1 1 1.1 1.5 2.7 1 4.2a7.4 7.4 0 0 0 6.6 9.3c5 .3 8.8-4.6 7.3-9.4-.8-2.7 1.6-4.5 1.3-4.2 1.8-1.8 3.7-.8 5.4-1 9.2-.3 9-14.3-.3-14.4Z"></path>
              </svg>
            </span>
            analysis, and data handling, with a background in computer science that has honed my skills in algorithms
            <span className="splt-wrap">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 61 75">
                <g clipPath="url(#e)">
                  <path
                    stroke="url(#f)"
                    strokeWidth="2"
                    d="M50 49.5A26.3 26.3 0 0 0 30.5 75c0-12.2-8.3-22.5-19.5-25.5A26.3 26.3 0 0 0 30.5 24c0 12.2 8.3 22.5 19.5 25.5Z"
                  ></path>
                </g>
                <defs>
                  <linearGradient id="f" x1="30.5" x2="30.5" y1="24" y2="75" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6796D4"></stop>
                    <stop offset=".5" stopColor="#FC9696"></stop>
                    <stop offset="1" stopColor="#F7B579"></stop>
                  </linearGradient>
                  <clipPath id="e">
                    <path fill="#fff" d="M0 0h61v75H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </span>
            database management, and memory optimization.
          </p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default About;
