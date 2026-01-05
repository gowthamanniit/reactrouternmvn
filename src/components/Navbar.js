import { NavLink } from "react-router-dom";
import React from 'react'
import '../App.css'
const Navbar = () => {

  return (
      <nav>
      <NavLink id="nl" to="/">Home</NavLink> 
      <NavLink id="nl" to="/DataInsert">DataInsert</NavLink> 
      <NavLink id="nl" to="/View">View</NavLink> 
      <NavLink id="nl" to="/ContactUs">Contact Us</NavLink>
      <NavLink id="nl" to="/Help">Help</NavLink> 
      </nav>
  )
}

export default Navbar
