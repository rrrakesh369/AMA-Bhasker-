import React from 'react'

import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import AboutUs from './AboutUs'
import homeImg from "../images/home.jpg"; 


const Body = () => {
  const location = useLocation();
  return (   
   <>
  <NavBar />

  {/* HOME PAGE BANNER */}
  {location.pathname === "/" && (
    <div className="w-full">
      <img
        src={homeImg}
        alt="Home Banner"
        className="
          w-full
          h-[220px]
          sm:h-[320px]
          md:h-[450px]
          lg:h-[600px]
          object-cover
        "
      />
    </div>
  )}

  {/* MAIN CONTENT AREA */}
  {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-screen"> */}
    <Outlet />
  {/* </main> */}

  <Footer />
</>
   
  
  )
}

export default Body
