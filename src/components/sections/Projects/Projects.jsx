/* Path: src\components\sections\Projects\Projects.jsx */

import React, { useRef } from 'react'
import { ProjectsWrapper } from '../..'
import {SideLink} from '../..'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import styles from './Projects.module.css'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const sectionRef = useRef(null)
  const line1Ref =useRef(null);
  const line2Ref =useRef(null);
  const countRef =useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none"
      }
    })

    tl.fromTo(
      line1Ref.current,
      {
        xPercent: -100,
        opacity: 0
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    )

    .fromTo(
      line2Ref.current,
      {
        xPercent: 100,
        opacity: 0
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      },
      "-=0.5"
    )

    .fromTo(
      countRef.current,
      {
        x: 60,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.4"
    )

  }, { scope: sectionRef })  

  return (
    <section ref={sectionRef} className={styles.projectsSection}>
      <div className={`container ${styles.projectsContainer}`}>

        <div className={styles.headingRow}>
            <div className={styles.headingInnerContainer}>
              <h1 className={styles.heading}>

                <div className={styles.mask}>
                  <span ref={line1Ref} className={styles.line}>
                    <i>Empowering</i>
                  </span>
                </div>

                <div className={styles.mask}>
                  <span ref={line2Ref} className={styles.line}>
                    imagery
                  </span>
                </div>

              </h1>

              <p ref={countRef} className={styles.smallText}>[ 120+ ]</p>
            </div>

            <SideLink className={styles.sideLinkProjects} to="/projects">Projects</SideLink>              
        </div>

        <ProjectsWrapper />

      </div>
    </section>
  )
}

export default Projects