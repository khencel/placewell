"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import s from "../components/styles/swiper.module.css"
import { Autoplay,Navigation, Pagination } from "swiper/modules";
import YouTube from "react-youtube";
import { CSSProperties } from "react";
import CustomHR from "@/components/CustomHR";
import Rolling from "@/components/Rolling";
import { getRollingData, getWhyHireFilipino, getAllClient } from "@/data/homepage";
import WhyPlacewell from "@/components/WhyPlacewell";
import WhyHire from "@/components/WhyHire";
import slide2 from "@/styles/slide2.module.css"
import slide3 from "@/styles/slide3.module.css"

import { useTranslations } from "next-intl";
import Banner from "@/components/Banner";

import { FaClipboardList } from "react-icons/fa";
import Slide4 from "./slide4";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const rollingData = getRollingData();
  const whyHireFilipino = getWhyHireFilipino();
  const allClient = getAllClient();

  const t = useTranslations();
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

  const cards = [
    { img: "/img/slide3/pic1.png", label: 'Welding' },
    { img: "/img/slide3/pic2.png", label: 'Construction' },
    { img: "/img/slide3/pic3.png", label: 'Trailer Truck Driving' },
    { img: "/img/slide3/pic4.png", label: 'Domestic Work' },
    { img: "/img/slide3/pic5.png", label: 'Caregiving' },
    { img: "/img/slide3/pic6.png", label: 'Food Service' },
  ];
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        // autoplay={{
        //   delay: 12000, 
        //   disableOnInteraction: false, 
        // }}
        speed={800}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className={s.hero}>
              <div className={s.content}>
                <h1 className={s.bannerTitle}>{t("home.bannerTitle")}</h1>
                <p>{t("home.bannerSubtitle")}</p>
              
                
                <div className={s.buttons}>
                  <button className={s.btnprimary}>{t("home.bannerPrimaryBtn")}</button>
                  {/* <button className={s.btnoutline}>Learn More</button> */}
                </div>
              </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <section className={slide2.hero}>
            <div className="container-fluid h-100">
              <div className="row h-100 align-items-center">

                {/* LEFT SIDE */}
                <div className="col-lg-5">
                  <div className={slide2.leftPanel}>

                    <div className="row justify-content-center">

                      <div className="col-5">
                        <div className={slide2.certCard}>
                          <img src="/dmw.png" alt="DMW" />
                        </div>
                      </div>

                      <div className="col-5">
                        <div className={slide2.certCard}>
                          <img src="/iso.png" alt="ISO" />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className={slide2.logoCard}>
                          <img src="/logo.png" alt="Placewell" />
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="col-lg-7">
                  <div className={slide2.content}>

                    <span className={slide2.subtitle}>
                      TRUSTED. EXPERIENCED. COMMITTED.
                    </span>

                    <h1 className={slide2.title}>
                      Placewell International
                      <br />
                      Services Corporation
                    </h1>

                    <div className={slide2.line}></div>

                    <p className={slide2.description}>
                      Is a trusted Philippine overseas recruitment agency with more than 50 years of experience in sourcing and deploying qualified Filipino talent to employers around the world. Backed by a dedicated team and a comprehensive recruitment process, we provide reliable workforce solutions while upholding professionalism, integrity, and a strong commitment to both our clients and the workers we serve.
                    </p>

                    {/* <button className={slide2.ctaBtn}>
                      Learn More →
                    </button> */}

                  </div>
                </div>

              </div>
            </div>

            <div className={slide2.dots}></div>
          </section>
          
        </SwiperSlide>


        <SwiperSlide>
          <section className={slide3.tradeTests}>
            <div className={slide3.accentCircleTop} />
            <div className={slide3.accentCircleBottom} />
            <div className={slide3.container}>
              <div className={slide3.left}>
                <div className={slide3.icon}>
                  <FaClipboardList />
                </div>
                <h2>Training and Trade Tests</h2>
                <p>
                  We conduct training and trade tests across a number of skills all at our own top-tier facilities.
                </p>
                <Link href="/trade-test">
                  <button className={`${s.btnprimary} mt-3`}>More Details</button>
                </Link>

                <div className="row justify-content-center" style={{paddingTop:"15%"}}>
                  <div className="col-md-5 text-center">
                    <img 
                      src="/TESDA-Logo.png"
                      alt=""
                      style={{
                        width:"150px",
                        height:"150px",
                        objectFit:"contain"
                      }} 
                    />
                  </div>
                  <div className="col-md-5 text-center">
                    <img 
                      src="/iso.png" 
                      alt="ISO" 
                      style={{
                        width:"150px",
                        height:"150px",
                        objectFit:"contain"
                      }} 
                    />
                  </div>
                </div>
              </div>

              
                


              <div className={slide3.right}>
                {cards.map((card) => (
                  <div className={slide3.card} key={card.label}>
                    {/* <img
                      src={card.img}
                      alt={card.label}
                      loading="lazy"
                    /> */}
                    <Image
                      src={card.img}
                      alt={card.label}
                      width={400}
                      height={300}
                      style={{ objectFit: "cover" }}
                    />
                    <span>{card.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
        </SwiperSlide>

        <SwiperSlide>
              <Slide4 />
        </SwiperSlide>
        
      </Swiper>
      <section style={styles.section}>
        <div style={styles.gradientBg}></div>
        <div style={styles.header}>
          <h2 style={styles.title}>{t("home.videoTitle")}</h2>
          <p style={styles.subtitle}>
            {/* {t("home.videoDesc")} */}
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
    
    <WhyHire />
    <WhyPlacewell />
    

    <section className="mt-5 mb-5">
      <div style={styles.header}>
          <h2 style={styles.title}>{t("home.gallery")}</h2>
          <p style={styles.subtitle}>
            {t("home.gallerydesc")}
          </p>
        </div>
        
        <div className="row justify-content-center m-0">
          <div className="col-md-10">
              <Rolling isContain={false} data={whyHireFilipino}  />
              
              <CustomHR />
          </div>
        </div>
    </section>


    <section className="mt-5 mb-5">
      <div style={styles.header}>
          <h2 style={styles.title}>{t("home.ourClients")}</h2>
          <p style={styles.subtitle}>
            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. */}
          </p>
        </div>
        
        <div className="row justify-content-center m-0">
          <div className="col-md-10">
              <Rolling data={allClient} perSlide={5} isLoop={true} isAutoplay={true} />
              
              <CustomHR />
          </div>
        </div>
    </section>
     
    </>
    
  );
}