import React from "react";
import Helix from "../components/Helix";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import About from "../components/About";
import Paper from "../components/Paper";

const Main = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from([".name", ".h4", ".icon-link"], {
      y: 50,
      scale: 1,
      duration: 0.75,
      opacity: 0,
      ease: "power2.out",
      delay: 1,
    });
  }, []);

  return (
    <>
      <section className="cover gsap relative home">
        <div></div>
        <div className="mx-width relative" id="home__splash">
          <div className="name">Name</div>
          <div className="center absolut-vodka">
            <Helix />
            <div className="mx-width stack:m">
              <div className="g-wrapper">
                <div className="grid:2">
                  <div className="stack:s">
                    <p className="h4 text:limit">Focused on omics data analysis and precision medicine in genomics</p>
                  </div>
                  <div>
                    <a href="#projects" className="icon-link btn">
                      Scroll to explore
                      <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 15V1m0 14-4-4m4 4 4-4"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Paper />
    </>
  );
};

export default Main;
