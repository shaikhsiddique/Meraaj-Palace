import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Footer() {
  return (
    <>
    <div className='flex items-center'>
    <div className="relative flex items-center justify-center h-32 w-32">
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle, white 0%, black 60%, transparent 100%)",
                zIndex: 10,
              }}
            ></div>
            <img src="./footer-logo.png" className="h-12 z-50" alt="" />
          </div>
          <h3 className='text-white pr-56'>Copyright 2023-24 - Meraaj Palace Restaurant</h3>
    </div>
         
          <div className='flex items-center'>
          <div className="flex items-center gap-4 text-3xl">
          <i className="ri-instagram-line"></i>
          <i className="ri-facebook-circle-line"></i>
          <i className="ri-whatsapp-line"></i>
          </div>
          <h4 className='footer-text text-2xl px-12'>
            Created by: bytebrix_
          </h4>
          </div>
    </>
  )
}

export default Footer