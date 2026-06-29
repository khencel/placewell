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
import { useLocale } from "@/i18n/LocaleContext";
import { LanguagePicker } from "./langSelector";
import Link from "next/link";


export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();
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
            <Link href="https://www.facebook.com/PlacewellInternational" target="_blank" rel="noopener noreferrer">
              <span><FaFacebook className="social-icon" /></span>
            </Link>
            <Link href="https://www.linkedin.com/company/placewell-international-services-corporation-pisco" target="_blank" rel="noopener noreferrer">
              <span><FaLinkedin className="social-icon" /></span>
            </Link>
            <Link href="https://www.instagram.com/placewell_international/" target="_blank" rel="noopener noreferrer">
              <span><FaInstagram className="social-icon" /></span>
            </Link>
            <Link href="https://www.youtube.com/@placewellinternationalserv4854" target="_blank" rel="noopener noreferrer">
              <span><FaYoutube className="social-icon" /></span>
            </Link>
            <Link href="https://www.tiktok.com/@placewellmainoffice" target="_blank" rel="noopener noreferrer">
              <span><FaTiktok className="social-icon" /></span>
            </Link>
            <span>
              {/* <select
                value={locale}
                onChange={(e) => {
                  const selectedLocale = e.target.value as Parameters<typeof setLocale>[0];
                  setLocale(selectedLocale);
                }}
              >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
                <option value="zh">Mandarin</option>
                <option value="yue">Cantonese</option>
                <option value="ja">Japanese</option>
                <option value="lt">Lithuanian</option>
                <option value="hr">Croatian</option>
                <option value="pl">Polish</option>
              </select> */}
              <LanguagePicker />
            </span>
          </div>
        </div>

        {/* MOBILE SOCIALS */}
        <div className={`socials for-mobile pt-2 pb-3 ${open ? "show" : ""}`}>
          <Link href="https://www.facebook.com/PlacewellInternational">
            <span><FaFacebook className="social-icon" /></span>
          </Link>
          <Link href="https://www.linkedin.com/company/placewell-international-services-corporation-pisco" target="_blank" rel="noopener noreferrer">
            <span><FaLinkedin className="social-icon" /></span>
          </Link>
          <Link href="https://www.instagram.com/placewell_international/" target="_blank" rel="noopener noreferrer">
            <span><FaInstagram className="social-icon" /></span>
          </Link>
          <Link href="https://www.youtube.com/@placewellinternationalserv4854" target="_blank" rel="noopener noreferrer">
            <span><FaYoutube className="social-icon" /></span>
          </Link>
          <Link href="https://www.tiktok.com/@placewellmainoffice" target="_blank" rel="noopener noreferrer">
            <span><FaTiktok className="social-icon" /></span>
          </Link>
        </div>

        {/* MENU */}
        <ul className={`nav-menu ${open ? "active" : ""}`}>
          <NavForDesktop />
          <NavForMobile onClose={() => setOpen(false)} />
        </ul>
        {/* LANGUAGE PICKER — mobile only, outside nav-menu */}
          {open && (
              <div className="mobile-lang-picker">
                  <LanguagePicker />
              </div>
          )}
      </nav>
    </div>
  );
}