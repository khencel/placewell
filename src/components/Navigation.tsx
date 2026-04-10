"use client";
import { useState } from "react";
import { 
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTiktok 
} from "react-icons/fa6";

import NavForMobile from "./NavForMobile";
import NavForDesktop from "./NavForDesktop";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-div">
      <nav className="nav-container">

        {/* TOP BAR */}
        <div className="nav-top">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>

          {/* BURGER */}
          <div
            className={`burger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* SOCIALS DESKTOP */}
          <div className={`socials ${open ? "hide" : ""}`}>
            <span><FaFacebook className="social-icon" /></span>
            <span><FaLinkedin className="social-icon" /></span>
            <span><FaInstagram className="social-icon" /></span>
            <span><FaYoutube className="social-icon" /></span>
            <span><FaTiktok className="social-icon" /></span>
          </div>
        </div>

        {/* MOBILE SOCIALS */}
        <div className={`socials for-mobile pt-2 pb-3 ${open ? "show" : ""}`}>
          <span><FaFacebook className="social-icon" /></span>
          <span><FaLinkedin className="social-icon" /></span>
          <span><FaInstagram className="social-icon" /></span>
          <span><FaYoutube className="social-icon" /></span>
          <span><FaTiktok className="social-icon" /></span>
        </div>

        {/* MENU */}
        <ul className={`nav-menu ${open ? "active" : ""}`}>
          <NavForDesktop />
          <NavForMobile />
        </ul>
      </nav>
    </div>
  );
}