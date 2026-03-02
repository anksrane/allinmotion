/* Path: src\components\sections\Awards\Awards.jsx */

import { useState, useRef } from 'react'
import {SideLink} from '../..'
import { Awardsimg1, Awardsimg2, Awardsimg3 } from '../../../assets'
import {AwardShowcase} from '../..'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import styles from './Awards.module.css'

gsap.registerPlugin(ScrollTrigger)

function Awards() {
  const sectionRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)

  const awardsData = [
    {
      id: 1,
      title: "Hermes gold award",
      image: Awardsimg1,
      category: "Motion category",
      year: "2023",
    },
    {
      id: 2,
      title: "Viddy awards",
      image: Awardsimg2,
      category: "Branded content",
      year: "2022",
    },
    {
      id: 3,
      title: "Viddy platinum award",
      image: Awardsimg3,
      category: "Direction",
      year: "2021",
    },
  ];

  const [activeAward, setActiveAward] = useState(awardsData[0]);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none"
      }
    })

    // Championing (from left)
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

    // Achievements (from right)
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
      "-=0.5" // overlap for smooth stagger
    )

  }, { scope: sectionRef })  

  return (
    <section ref={sectionRef} className={styles.awardsSection}>
      <div className={`container ${styles.awardsContainer}`}>

        {/* ✅ Heading Row */}
        <div className={styles.headingRow}>
            <div className={styles.headingInnerContainer}>
              <h1 className={styles.heading}>

                <div className={styles.mask}>
                  <span ref={line1Ref} className={styles.line}>
                    <i>Championing</i>
                  </span>
                </div>

                <div className={styles.mask}>
                  <span ref={line2Ref} className={styles.line}>
                    Achievements
                  </span>
                </div>

              </h1>
            </div>

            <SideLink className={styles.sideLinkAwards} to="/awards">awards</SideLink>              
        </div>
        
        {/* ✅ Showcase */}
        <AwardShowcase
          awards={awardsData}
          activeAward={activeAward}
          onSelect={setActiveAward}
        />        

      </div>
    </section>
  )
}

export default Awards