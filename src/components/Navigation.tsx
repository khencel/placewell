"use client";
import { useState } from "react";
import { 
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTiktok 
} from "react-icons/fa6";
import { FaHospital, FaUserDoctor, FaSyringe } from "react-icons/fa6";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

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
          {/* DROPDOWN ITEM */}
          <li
            className="mega-wrapper"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
            >
            <a href="#" className="nav-link active">
                Explore our network
            </a>

            {/* MEGA MENU */}
            <div className={`mega-menu ${megaOpen ? "show" : ""}`}>

                {/* arrow */}
                <div className="mega-arrow"></div>

                <div className="mega-grid">
                    <strong>Explore our Network</strong>
                    <div className="mega-item">
                        <FaHospital className="social-icon" />
                        <div>
                        <h4>Our Hospitals & Other Facilities</h4>
                        <p>Meet who make up our network.</p>
                        </div>
                    </div>

                    <div className="mega-item">
                        <FaUserDoctor className="social-icon" />
                        <div>
                        <h4>Find a Doctor</h4>
                        <p>Find the doctor who fits your needs.</p>
                        </div>
                    </div>

                    <div className="mega-item">
                        <FaSyringe className="social-icon" />
                        <div>
                        <h4>Our Services</h4>
                        <p>Browse the services offered by our partners.</p>
                        </div>
                    </div>
                </div>
            </div>
            </li>

          <li><a href="#">Learn the latest on MPH</a></li>
          <li><a href="#">Be part of the network</a></li>
          <li><a href="#">Watch and scroll</a></li>
          <li><a href="#">Grow with us</a></li>
          <li><a href="#">Get in touch</a></li>

        </ul>
      </nav>
    </div>
  );
}