"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import s from "../components/styles/swiper.module.css"
import { Autoplay } from "swiper/modules";
import YouTube from "react-youtube";
import { CSSProperties } from "react";
import CustomHR from "@/components/CustomHR";
import Rolling from "@/components/Rolling";
import { getRollingData, getWhyHireFilipino } from "@/data/homepage";
import WhyPlacewell from "@/components/WhyPlacewell";
import WhyHire from "@/components/WhyHire";


export default function Home() {
  const rollingData = getRollingData();
  const whyHireFilipino = getWhyHireFilipino();
  const styles: { section: CSSProperties; header: CSSProperties; title: CSSProperties; subtitle: CSSProperties; videoCard: CSSProperties; videoWrapper: CSSProperties; youtube: CSSProperties; gradientBg: CSSProperties } = {
  section: {
    padding: "60px 20px",
    background: "#ffffff",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "60px",
    position: "relative",
    overflow: "hidden",
    zIndex: 0,
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
    color: "black",
  },

  title: {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#448153",
  },

  subtitle: {
    color: "#94a3b8",
  },

  videoCard: {
    width: "100%",
    maxWidth: "80%",
    height: "750px",
    padding: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    zIndex: 2,
    display: "flex",
    background: "white",
  },

  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden",
    borderRadius: "12px",
  },
  youtube: {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    overflow: "hidden",
    flex: 1,
  },
  gradientBg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "60%",

    background: "linear-gradient(to bottom, transparent, #709C6B)",
    zIndex: 0,
    pointerEvents: "none",
  },
};
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        speed={800}
      >
        <SwiperSlide>
          <div className={s.hero}>
              <div className={s.content}>
                <h1 className={s.bannerTitle}>The World's Most Trusted Filipino Manpower Company</h1>
                <p>Inspiring customers & supporting through experience</p>
                
                <div className={s.buttons}>
                  <button className={s.btnprimary}>Contact Us</button>
                  <button className={s.btnoutline}>Learn More</button>
                </div>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.heroRight}>
              <div className={s.content}>
                <h1 className={s.bannerTitle}>The World's Most Trusted Filipino Manpower Company</h1>
                <p>Inspiring customers & supporting through experience</p>
                
                <div className={s.buttons}>
                  <button className={s.btnprimary}>Contact Us</button>
                  <button className={s.btnoutline}>Learn More</button>
                </div>
              </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
      <section style={styles.section}>
        <div style={styles.gradientBg}></div>
        <div style={styles.header}>
          <h2 style={styles.title}>Featured Video</h2>
          <p style={styles.subtitle}>
            Watch our latest highlight and updates
          </p>
        </div>

        
        <div style={styles.videoCard} className={s.videoCard}>
            <YouTube
              videoId="1vIU3R-BIDQ"
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                  mute: 1,
                  loop: 1,
                  playlist: "1vIU3R-BIDQ",
                },
              }}
              style={styles.youtube}
            />
        </div>
        <div style={{width:"80%", zIndex: 1}}>
          <CustomHR />
        </div>
        
        
    </section>
    
    <WhyPlacewell />
    <WhyHire />

    <section className="mt-5 mb-5">
      <div style={styles.header}>
          <h2 style={styles.title}>Gallery</h2>
          <p style={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        
        <div className="row justify-content-center m-0">
          <div className="col-md-10">
              <Rolling data={whyHireFilipino} />
              
              <CustomHR />
          </div>
        </div>
    </section>
     
    </>
    
  );
}