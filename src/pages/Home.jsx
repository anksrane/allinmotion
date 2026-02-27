/* Path: src\pages\Home.jsx */

import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

import { AnimationImageLayer, ScrollReactivePath } from "../components";
import { Hero, FullBanner, About, Clients, Services, Projects, Awards, ReadySection } from '../components'

gsap.registerPlugin(ScrollTrigger, Flip);

function Home() {
  const floatingImageRef = useRef(null);

  const heroSlotRef = useRef(null);
  const bannerRef = useRef(null);
  const aboutImageRef = useRef(null); 

  useGSAP(() => {
    const image = floatingImageRef.current;
    const heroSlot = heroSlotRef.current;
    const banner = bannerRef.current;
    const landing = aboutImageRef.current;

    if (!image || !heroSlot || !banner || !landing) return;

    const heroRect = heroSlot.getBoundingClientRect();

    // Initial placement
    gsap.set(image, {
      position: "fixed",
      x: heroRect.left,
      y: heroRect.top,
      width: heroRect.width,
      height: heroRect.height,
    });

    // Phase 1 + 2
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: banner,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      }
    });

    tl.to(image, {
      x: 0,
      y: 0,
      width: () => window.innerWidth,
      height: () => window.innerHeight,
      ease: "none",
      duration: 1
    });

    tl.to(image, {
      ease: "none",
      duration: 1.0
    });

    // Phase 3 → FLIP Trigger
    ScrollTrigger.create({
      trigger: landing,
      start: "top 70%",
      end: "top 40%",
      scrub: true,
      onEnter: () => flipToLanding(),
      onLeaveBack: () => flipToFullscreen(),
    });

    function flipToLanding() {
      const state = Flip.getState(image);

      landing.appendChild(image);

      gsap.set(image, {
        position: "absolute",
        width: "100%",
        height: "100%",
        x: 0,
        y: 0,
      });

      Flip.from(state, {
        duration: 0.9,
        ease: "power2.out",
      });
    }

    function flipToFullscreen() {
      const state = Flip.getState(image);

      document.body.appendChild(image);

      gsap.set(image, {
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
      });

      Flip.from(state, {
        duration: 0.9,
        ease: "power2.out",
      });
    }

  });

  return (
    <>
      {/* <ScrollReactivePath /> */}
      <AnimationImageLayer ref={floatingImageRef} />

      <Hero imageSlotRef={heroSlotRef} />
      <FullBanner ref={bannerRef} />
      <About imageLandingRef={aboutImageRef} />
      <Clients />
      <Services />
      <Projects />
      <Awards />
      <ReadySection />
    </>
  )
}

export default Home