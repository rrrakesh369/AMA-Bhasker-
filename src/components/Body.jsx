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
        <NavBar/>
        {/* SHOW IMAGE ONLY ON HOME ("/") */}
      {location.pathname === "/" && (
        <div className="w-full">
          <img
            src={homeImg}
            alt="Home Banner"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
          />
        </div>
      )}
        <Outlet/>
        <Footer/>
    </>      
  
  )
}

export default Body
