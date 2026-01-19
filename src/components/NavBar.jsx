import React from 'react'
import img from "../images/logo.png"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>    
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start mx-5">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to="/aboutus" className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">About us</Link></li>
        <li>
          <a className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl"><Link to= "/services">Services</Link></a>
          <ul className="p-2">
            <li><a className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Submenu 1</a></li>
            <li><a className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Submenu 2</a></li>
            <li><a className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Submenu 3</a></li>
            <li><a className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Submenu 4</a></li>
            <li><a className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Submenu 5</a></li>
          </ul>
        </li>
         <li><Link to="/industries" className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Industries</Link></li>
         <li><Link to="/careers"className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Careers</Link></li>
          <li><Link to="/contactus" className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Contact us</Link></li>
      </ul>
    </div>
   <img
  src={img}
  alt="Logo"
  className="
    h-8 sm:h-10 md:h-12 lg:h-14
    w-auto
    object-contain
    brightness-110
    contrast-110
    transition-transform duration-300
    hover:scale-105
  "
/>

    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/aboutus" className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">About us</Link></li>
      <li>
        <details>
          <summary className="relative inline-block cursor-pointer hover:text-orange-500 transition duration-300
    before:content-[''] before:absolute before:left-0 before:-bottom-1
    before:h-[2px] before:w-0 before:bg-orange-500
    before:transition-all before:duration-300
    hover:before:w-full text-xl"><Link to= "/services">Services</Link></summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><Link to="" className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Submenu 1</Link></li>
            <li><Link to="" className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Submenu 2</Link></li>
            <li><Link to="" className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Submenu 3</Link></li>
            <li><Link to="" className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Submenu 4</Link></li>
            <li><Link to="" className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Submenu 5</Link></li>
          </ul>
        </details>
      </li>
          <li><Link to="/industries" className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Industries</Link></li>
         <li><Link to="/careers" className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Careers</Link></li>
          <li><Link to="/contactus" className="relative hover:text-orange-500 transition duration-300
    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
    before:w-0 before:bg-orange-500 before:transition-all before:duration-300
    hover:before:w-full text-xl">Contact us</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle mx-5">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
  </div>
</div>
     
    </>
  )
}

export default NavBar
