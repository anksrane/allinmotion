/* Path: src\components\sections\Clients\Clients.jsx */

import React,{ useRef } from "react";
import { NavLink } from 'react-router-dom'
import { FaCaretRight } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import { ClientsLogo } from '../../../assets/index';
import SideLink from "../../ui/SideLink/SideLink";

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import "swiper/css";
import styles from "./Clients.module.css";

gsap.registerPlugin(ScrollTrigger)

const logos = [
  ClientsLogo,
  ClientsLogo,
  ClientsLogo,
  ClientsLogo,
  ClientsLogo,
  ClientsLogo,
];

const duplicatedLogos = [...logos, ...logos, ...logos];

function Clients() {
  const sectionRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const line3Ref = useRef(null) 
  
  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none"
      }
    })

    // Bringing (from left)
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

    // Visions (from right)
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
      "-=0.4" // overlap for smooth stagger
    )

    // to Life (from left)
    .fromTo(
      line3Ref.current,
      {
        xPercent: -100,
        opacity: 0
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      },
      "-=0.4"
    )

  }, { scope: sectionRef })  

  return (
    <section ref={sectionRef} className={styles.clientsSection}>
      <div className={`container ${styles.clientsContainer}`}>

        <div className={styles.stat}>
          <span className={styles.statNumber}>20+</span>
          <span className={styles.statLabel}>satisfied customers</span>
        </div>

        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>
            <span ref={line1Ref} className={styles.line}>Bringing</span> <br />
            <span ref={line2Ref} className={styles.line}><i>Visions</i></span> <br />
            <span ref={line3Ref} className={styles.line}>to Life</span>
          </h1>
        </div>

        <SideLink to="/clients" className={styles.clientsLink}>clients</SideLink>
      </div>

      {/* Carousel */}
      <div className={styles.carouselWrapper}>
        <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            slidesPerView="auto"
            spaceBetween={24}
            allowTouchMove={false}
            observer={true}
            observeParents={true}
            onInit={(swiper) => {
              setTimeout(() => {
                swiper.autoplay?.start();
              }, 50);
            }}
        >
          {duplicatedLogos.map((logo, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.logoCard}>
                <img src={logo} alt="client logo" className={`img-fluid`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Clients;