/* Path: src\components\animations\ScrollAnimation\ScrollReactivePath.jsx */

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ScrollReactivePath.module.css";

gsap.registerPlugin(ScrollTrigger);

function ScrollReactivePath() {
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  useGSAP(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!path || !svg) return;

    const pageHeight = document.body.scrollHeight;

    // Match SVG height to full page dynamically
    gsap.set(svg, {
      height: pageHeight,
    });

    const length = path.getTotalLength();

    // Show only small part (snake body length)
    const snakeLength = 400;

    gsap.set(path, {
      strokeDasharray: `${snakeLength} ${length}`,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <svg
        ref={svgRef}
        className={styles.svg}
        viewBox="0 0 1440 5000"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="
            M700 0
            C300 400 1100 900 600 1400
            S1000 2200 400 3000
            S900 4000 700 5000
          "
          className={styles.path}
        />
      </svg>
    </div>
  );
}

export default ScrollReactivePath;