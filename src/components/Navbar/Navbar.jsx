import React from 'react'
import "./navbar.css"
import logo from '../../assets/assets/logo.png'

const Navbar = () => {
  return (
    <div classname="navbar">
        <div className="navbar__left">
            <img src={logo} alt="" />
        </div>
        <div className="navbar__right"></div>
    </div>
  )
}

export default Navbar