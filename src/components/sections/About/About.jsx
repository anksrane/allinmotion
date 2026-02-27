/* Path: src\components\sections\About\About.jsx */

import React, { useRef } from "react"
import { NavLink } from 'react-router-dom'
import { FaCaretRight } from "react-icons/fa"
import { NavButtonIcon } from '../../index'
import { GoArrowUpRight } from "react-icons/go"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger)

function About({ imageLandingRef }){
  const sectionRef = useRef(null)
  const headingTopRef = useRef(null)
  const bottomHeadingRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current, 
        start: "top 50%",
        toggleActions: "play none none none"
      }
    })    
    tl.fromTo(
      headingTopRef.current,
      {
        x: -200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.3
      }
    )
    .fromTo(
      bottomHeadingRef.current,
      {
        x: -200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      },
      "+=0.3" 
    )
  }, [])

  return (
    <section ref={sectionRef} className={`w-full ${styles.aboutOuterContainer}`}>
      <div className={`container ${styles.aboutInnerContainer}`}>
        <div className={styles.headingContainer}>
          <h1 ref={headingTopRef} className={styles.heading}>A Creative <br/><i>Vision</i></h1>
          <h1 ref={bottomHeadingRef} className={`${styles.heading} ${styles.headingBottom}`}>in Motion</h1>  
          <NavLink 
            to="/about" 
            className={styles.aboutLink}>
            <FaCaretRight className={styles.aboutRightIcon}/> about us</NavLink>
        </div>   
        <div className={styles.rightContent}>
          <div ref={imageLandingRef} className={styles.imageLandingZone}></div>

          <p className={styles.description}>
            All in Motion is a global creative production company, partnering with leading businesses and brands worldwide to fulfill their diverse communication needs.
          </p>

          <NavButtonIcon className={styles.aboutNavbutton} to="/contact" icon={GoArrowUpRight} variant="colored"> Start a Project</NavButtonIcon>
        </div>
      </div>
    </section>
  );
}

export default About;