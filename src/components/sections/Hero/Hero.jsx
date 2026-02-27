/* Path: src\components\sections\Hero\Hero.jsx */

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import styles from './Hero.module.css'

const letters = [
  "A", "L", "L", "", "I", "N",
  "M", "O", "T", "I", "O", "N",
  "A", "L", "L", "", "I", "N",
  "M", "O", "T", "I", "O", "N"
];

function Hero({ imageSlotRef }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const q = gsap.utils.selector(hero);
    const headings = q(`.${styles.heroHeading}`);

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;

      // normalize -1 → 1
      const percentX = (x / rect.width - 0.5) * 2;

      gsap.to(headings, {
        rotation: (i) => percentX * (20 + i * 0.2),  
        ease: "power2.out",
        duration: 0.4
      });
    };

    const reset = () => {
      gsap.to(headings, {
        rotation: 0,
        ease: "power3.out",
        duration: 0.6
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", reset);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", reset);
    };
  }, []);
  
  return (
    <div ref={heroRef} className={`w-full ${styles.heroOuterContainer}`}>
      <div className={`container ${styles.heroInnerContainer}`}>
        <div className={styles.heroGrid}>
          {letters.map((letter, index) => {
            // 4th position (index 3) → blank h1
            if (index === 3) {
              return (
                <div key={index} ref={imageSlotRef} className={styles.heroImageWrapper}>
                </div>
              );
            }

            // 16th position (index 15) → paragraph
            if (index === 15) {
              return (
                <p key={index} className={styles.heroText}>
                  Deliver in time all things amazing of value.
                  Travel beyond passionately, without fear with
                  respect for everyone.
                </p>
              );
            }

            // Normal letters
            return (
              <h1 key={index} className={styles.heroHeading}>
                {letter}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Hero