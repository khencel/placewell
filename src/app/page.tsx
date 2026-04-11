"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import s from "../components/styles/swiper.module.css"
import { Autoplay } from "swiper/modules";

export default function Home() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        // modules={[Autoplay]}
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
        
      </Swiper>
    </>
    
  );
}