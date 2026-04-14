
import Image from "next/image";
import s from "../components/styles/Footer.module.css"
import { 
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTiktok 
} from "react-icons/fa6";

export default function Footer() {
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
            <p>Home</p>
            <p>About Us</p>
            <p>Engage with Us</p>
            <p>Facilities and Divisions</p>
          </div>

          <div>
            <p>TESTIMONIALS</p>
            <p>GALLERY</p>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>
        </div>

        {/* Social + Badge */}
        <div className={s.right}>
          <p className={s.connect}>CONNECT WITH US</p>

          <div className={s.socials}>
            <span><FaFacebook className="social-icon" style={{color:"white"}} /></span>
            <span><FaLinkedin className="social-icon" style={{color:"white"}} /></span>
            <span><FaInstagram className="social-icon" style={{color:"white"}} /></span>
            <span><FaYoutube className="social-icon" style={{color:"white"}} /></span>
            <span><FaTiktok className="social-icon" style={{color:"white"}} /></span>
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
          <p>Legal & Compliance</p>
          <p>Privacy Policy</p>
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