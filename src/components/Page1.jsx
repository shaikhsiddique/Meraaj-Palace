
import React from 'react'

function Page1() {
  
  return (
    <div className="hero relative h-[200vh] w-full overflow-hidden">
          <video
           
            data-scroll
            data-scroll-speed="-8"
            data-scroll-direction="vertical"
            src="./hero.mp4"
            className="absolute z-20 top-[40%] left-1/2 transform -translate-x-1/2 "
            autoPlay
            muted
            loop
          ></video>
          <img
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="vertical"
            src="./food11.jpg"
            className="absolute z-10 top-[10%] left-[-50%] object-cover"
            alt="Hero Background"
          />
          <img
            data-scroll
            data-scroll-speed="1"
            data-scroll-direction="vertical"
            src="./food13.jpg"
            className="absolute z-10 top-[-50%] left-[-50%] object-cover"
            alt="Hero Background"
          />
          <img
            data-scroll
            data-scroll-speed="-5"
            data-scroll-direction="vertical"
            src="./food12.jpg"
            className="absolute z-10 top-0 right-[-50%] object-cover"
            alt="Hero Background"
          />
        </div>
  )
}

export default Page1