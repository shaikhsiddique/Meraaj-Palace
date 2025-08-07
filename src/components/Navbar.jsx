import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

function Navbar() {
  const navRef1 = useRef(null);
  const navRef2 = useRef(null);

  useGSAP(() => {
    gsap.from(navRef1.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay:2.5,
      ease: 'power3.out',
    });

    gsap.from(navRef2.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 3, // Delayed to appear after navRef1
    });
    console.log("runned");
  }, []);

  return (
    <nav className="w-full fixed z-20">
      {/* Top nav - address */}
      <div
        ref={navRef1}
        className="bg-black h-12 w-full flex items-center justify-center z-50"
      >
        <h3 className="nav-text text-white text-lg tracking-wide">
          511/2/1, NH4, Pune Bangalore Highway, Near Wade, Satara, Wadhe,
          Maharashtra
        </h3>
      </div>

      {/* Main nav - logo + links */}
      <div
        ref={navRef2}
        className="bg-[#140A0A] w-full h-24 flex items-center justify-between px-12 z-30"
      >
        <div className="left flex items-center">
          <img src="./logo.png" className="h-24" alt="Restaurant Logo" />
          <h2 className="text-white text-2xl nav-text2 ml-2">
            Meraaj Palace Restaurant
          </h2>
        </div>
        <div className="right flex items-center uppercase gap-6">
          <h2 className="text-white text-xl nav-text2">Menu</h2>
          <h2 className="text-white text-xl nav-text2">Hours & Location</h2>
          <h2 className="text-white text-xl nav-text2">About</h2>
          <h2 className="text-white text-xl nav-text2">Events</h2>
          <h2 className="text-white text-xl nav-text2">Gallery</h2>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
