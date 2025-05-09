import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Paper = () => {
  const sectionRef = useRef(null); // Reference to the #projects section
  const h1Ref = useRef(null); // Reference to the h1 element
  const h2Ref = useRef(null); // Reference to the h2 element
  const pRef = useRef(null); // Reference to the p element

  useEffect(() => {
    // Create an Intersection Observer to trigger the animation when the section is 40% visible
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        // If the section is 40% visible, trigger the animation
        if (entry.isIntersecting) {
          gsap.from(h1Ref.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
          });
          gsap.from(h2Ref.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            delay: 0.3, // Delay to make it happen after the h1 animation
          });
          gsap.from(pRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            delay: 0.6, // Delay to make it happen after the h2 animation
          });

          // Stop observing once the animation is triggered
          observer.disconnect();
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.4, // Trigger when 40% of the section is in view
      }
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect(); // Cleanup observer when component unmounts
    };
  }, []);

  return (
    <section className="mx-width stack:l gsap" id="projects" ref={sectionRef}>
      <h2 className="h1 font-accent" ref={h1Ref}>
        RESEARCH
        <br />
        <span className="italic">PAPER</span>
      </h2>
      <div className="g-wrapper">
        <div className="grid:1">
          <div className="h2 font-accent" ref={h2Ref}>
            Computational Biomarker Discovery for Thyroid Cancer
          </div>
          <p className="p" ref={pRef}>
            This research paper explores computational methods for identifying biomarkers in thyroid cancer, utilizing gene expression
            datasets from the Gene Expression Omnibus (GEO). By analyzing differentially expressed genes (DEGs) through tools like EdgeR,
            DAVID, and KEGG, the study identifies key genes and pathways, such as APOC1, CHI3L1, and SERPINA1, that are crucial in thyroid
            cancer progression. These findings are pivotal for improving diagnostic precision and developing targeted therapies,
            demonstrating the power of integrating bioinformatics with clinical research to tackle complex diseases.
          </p>
        </div>
      </div>
      <div>
        <a href="/projects/" className="btn">
          Show more
        </a>
      </div>
    </section>
  );
};

export default Paper;
