import React from 'react'

function Page2() {
  return (
    <div className="page2  w-full h-[120vh] relative z-50">
          <img
            data-scroll
            data-scroll-speed="-1"
            data-scroll-direction="horizontal"
            src="./food3.jpg"
            className=" rounded-full absolute left-[-10%] top-[5%]"
            alt=""
          />
          <img
            data-scroll
            data-scroll-speed="-1.5"
            data-scroll-direction="horizontal"
            src="./drink2.jpg"
            className=" rounded-full absolute left-[-10%] top-[33%] w-[390px]"
            alt=""
          />
          <img
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
            src="./drink1.jpg"
            className=" rounded-full absolute left-[-8%] top-[60%] w-[390px]"
            alt=""
          />
          <img
            data-scroll
            data-scroll-speed="1"
            data-scroll-direction="horizontal"
            src="./food1.jpg"
            className=" rounded-full absolute right-[-10%] top-[5%]"
            alt=""
          />
          <img
            data-scroll
            data-scroll-speed="1.5"
            data-scroll-direction="horizontal"
            src="./drink3.jpg"
            className=" rounded-full absolute right-[-10%] top-[33%] w-[390px]"
            alt=""
          />
          <img
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
            src="./food4.jpg"
            className=" rounded-full absolute right-[-8%] top-[60%] w-[390px]"
            alt=""
          />

          <div className="menu absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <img src="./menu.jpg" className="h-[70vh]" alt="" />
          </div>
        </div>
  )
}

export default Page2