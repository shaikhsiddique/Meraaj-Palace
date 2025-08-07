import React from 'react'

function Page5() {
  return (
    <div className="page5 w-full h-screen relative flex flex-col items-center gap-12 py-24 ">
    <img
      data-scroll
      data-scroll-speed="2"
      data-scroll-direction="vertical"
      src="./footer-left-leaf.png"
      className=" absolute bottom-16 left-[-3%] rotate-12"
      alt=""
    />
    <img
      data-scroll
      data-scroll-speed="-2"
      data-scroll-direction="vertical"
      src="./footer-right-leaf.png"
      className=" absolute top-24 right-[-5%] rotate-12 "
      alt=""
    />
    <h2 className="page5-title text-5xl font-semibold text-[#140A0A]">
      Our Story
    </h2>
    <h5 className="page5-text w-[60%] text-center text-2xl">
      We are a neighborhood restaurant located in Williamsburg, Brooklyn.
      Our food, conceived and created by Erik Ramirez, is quintessentially
      New York, with a modern take on Peruvian flavors, offering an
      element of surprise and new experiences with every meal. Peruvian
      food is an ever-evolving craft as new locales, new ingredients and
      new flavors are being rediscovered and embraced; Llama Inn aims to
      purvey this evolution in a modern, comfortable way. Our 75-seat
      dining room, is inspired by the confluence of architectural and
      artistic influences brought to Peru over many centuries, from its
      Andean heritage, ideas of modern colonialism, the urban hacienda,
      and classic Peruvian corner bars. Elements of natural wood,
      concrete, steel, tile and art were sourced from local craftsmen. Our
      season rooftop space, is now open for the summer, with comfy seating
      and tables for drinks, weekend brunch, or a private dining
      experience.
    </h5>
  </div>
  )
}

export default Page5