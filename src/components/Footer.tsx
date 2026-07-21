
"use client"
import s from "../components/styles/Footer.module.css"
import { 
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTiktok 
} from "react-icons/fa6";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className={s.footer}>
      <div className={s.topSection}>
        {/* Left Logo */}
        <div className={s.logo}>
          <h2>PLACEWELL INTERNATIONAL</h2>
          <span>Services Corporation</span>
        </div>

        {/* Links */}
        <div className={s.links}>
          <div>
              <p>
                  <Link style={{textDecoration:"none",color:"white"}} href="/">{t("nav.home")}</Link>
              </p>

              <p>
                  <Link style={{textDecoration:"none",color:"white"}} href="/about">{t("nav.about")}</Link>
              </p>

              <p>
                  <Link style={{textDecoration:"none",color:"white"}} href="/engage-with-us">{t("nav.engage")}</Link>
              </p>

              <p>
                  <Link style={{textDecoration:"none",color:"white"}} href="/department-facilities/department">
                      {t("nav.department")}
                  </Link>
              </p>
          </div>

          <div>
              <p>
                  <Link style={{textDecoration:"none",color:"white"}} href="/testimonials/client-testimonials">
                      {t("nav.client")}
                  </Link>
              </p>

              <p>
                  <Link style={{textDecoration:"none",color:"white"}} href="/testimonials/OFW-testimonials">
                      {t("nav.ofw")}
                  </Link>
              </p>

              <p>
                  <Link style={{textDecoration:"none",color:"white"}} href="/gallery">
                      {t("nav.gallery")}
                  </Link>
              </p>

              <p>
                  <Link style={{textDecoration:"none",color:"white"}} href="/contact-us">
                      {t("nav.contact")}
                  </Link>
              </p>

              <p>
                  <Link style={{textDecoration:"none",color:"white"}} href="/faq">
                      FAQ
                  </Link>
              </p>
          </div>
        </div>

        {/* Social + Badge */}
        <div className={s.right}>
                <p className={s.connect}>CONNECT WITH US</p>

                <div className={s.socials}>
          <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
          >
              <FaFacebook className="social-icon" style={{ color: "white" }} />
          </a>

          <a
              href="https://linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
          >
              <FaLinkedin className="social-icon" style={{ color: "white" }} />
          </a>

          <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
          >
              <FaInstagram className="social-icon" style={{ color: "white" }} />
          </a>

          <a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noopener noreferrer"
          >
              <FaYoutube className="social-icon" style={{ color: "white" }} />
          </a>

          <a
              href="https://tiktok.com/@yourpage"
              target="_blank"
              rel="noopener noreferrer"
          >
              <FaTiktok className="social-icon" style={{ color: "white" }} />
          </a>
      </div>

          {/* <div className={s.badge}>
            <Image
              src="/dpo-badge.png"
              alt="DPO Badge"
              width={120}
              height={200}
            />
          </div> */}
        </div>
      </div>

      <div className={s.divider} />

      <div className={s.bottom}>
        <div className={s.bottomLeft}>
          {/* <p>Legal & Compliance</p>
          <p>Privacy Policy</p> */}
        </div>

        {/* <div className={s.bottomRight}>
          <p>
            Website developed by <strong>Concept Machine</strong>
          </p>
        </div> */}
      </div>
    </footer>
  );
}