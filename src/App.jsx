import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Page3 from "./components/Page3";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const scrollRef = useRef(null);
  const screen1Ref = useRef(null);
  const screen2Ref = useRef(null);
  const logoRef = useRef(null);

  // Animate loading screens
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(logoRef.current,{
      opacity:0,
      scale:0.4,
      duration:1,
      delay:0.5,
      ease: "power2.inOut",
    })
    tl.to(screen1Ref.current, {
      y: "-100%",
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
    })
    .to(screen2Ref.current, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
    }, "-=0.9");
  }, []);

  // Initialize Locomotive Scroll after the animation is done
  useEffect(() => {
    const timeout = setTimeout(() => {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => scroll.destroy();
    }, 3000); // Delay locomotive init until animation ends

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Loading Screens */}
      <div
        ref={screen1Ref}
        className="fixed top-0 left-0 w-full h-screen bg-[#140A0A] flex items-center justify-center z-40 overflow-hidden"
      >
        <img
          ref={logoRef}
          src="./logo.png" className="h-20"
          alt=""
        />
      </div>

      <div
        ref={screen2Ref}
        className="fixed top-0 left-0 w-full h-screen bg-white opacity-30 z-30 overflow-hidden"
      ></div>

      {/* Main Site Content */}
      <div
        className="w-full min-h-screen bg-[#BEDEF2]"
        data-scroll-container
        ref={scrollRef}
      >
        <Navbar />
        <Page1 />
        <Page2 />
        <div className="page3 w-full h-screen relative bg-black z-20">
          <Page3 />
        </div>
        <Page4 />
        <Page5 />
        <div
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="vertical"
          className="page6 w-full h-44 bg-black flex items-start text-white"
        >
          <div className="h-34 w-full flex items-center justify-between py-12">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
