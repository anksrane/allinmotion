/* Path: src\components\sections\Services\Services.jsx */

import { useState, useRef } from "react";
import { NavLink } from 'react-router-dom'
import { FaCaretRight } from "react-icons/fa"
import { ServiceImg } from "../../../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SideLink from "../../ui/SideLink/SideLink";

import styles from "./Services.module.css";

const services = [
  { name: "Motion Graphics", image: ServiceImg, path:"/" },
  { name: "Craft Animation", image: ServiceImg, path:"/" },
  { name: "Virtual Reality 360°", image: ServiceImg, path:"/" },
  { name: "Live Action", image: ServiceImg, path:"/" },
  { name: "3D Animation", image: ServiceImg, path:"/" },
  { name: "Scripting", image: ServiceImg, path:"/" },
  { name: "Graphic Design", image: ServiceImg, path:"/" },
  { name: "Typography Animation", image: ServiceImg, path:"/" },
  { name: "Editing", image: ServiceImg, path:"/" },
  { name: "Voiceover", image: ServiceImg, path:"/" },
  { name: "SMM", image: ServiceImg, path:"/" },
];

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none"
      }
    });

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
      "-=0.4"
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.servicesSection}>
      <div className={`container ${styles.servicesContainer}`}>

        <div className={styles.headingRow}>
        <h1 className={styles.heading}>
          <span ref={line1Ref} className={styles.line}>
            Elevate your
          </span>
          <br />
          <span ref={line2Ref} className={styles.line}>
            <i>Storytelling</i>
          </span>
        </h1>

          <SideLink className={styles.serviceSideLink} to="/service">service</SideLink>              
        </div>

        <div className={styles.contentRow}>

          <div className={styles.servicesList}>
            {services.map((service, i) => (
                <div     
                    key={i}
                    className={styles.servicesListGroup}
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    >
                    <NavLink
                        className={styles.serviceItem}
                        to={service.path}
                    >
                        [ {service.name} ]
                    </NavLink>
                    {activeIndex === i && (
                    <div className={styles.previewCircle}>
                        <img src={service.image} alt={service.name} />
                    </div>
                    )}
                </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}