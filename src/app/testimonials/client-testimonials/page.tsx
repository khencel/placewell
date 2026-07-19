"use client"

import Banner from "@/components/Banner";
import YouTube from "react-youtube";
import TestimonialCard from "@/components/TestimonialsCard";
import s from "../../../styles/testimonials.module.css"
import { useTranslations } from "next-intl";
import getData from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation, Pagination } from "swiper/modules";


export default function ClientTestimonial() {
    const t = useTranslations("clientTestimonial");
    const items = getData()
    return (
        <>
            <Banner
                backgroundImage="/img/banner/clientTestimonials.jpg"
                title={t("title")}
                subtitle={t("subtitle")}
                description={t("desc")}
            />

            <section className="mt-5">
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="header">
                            <h2 className="title">{t("our")}</h2>
                            {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate ratione</p> */}
                        </div>
                        <div className="row">
                            <div className="col-md-4 p-2">
                                <div>
                                    {/* <YouTube
                                    videoId="1vIU3R-BIDQ"
                                    opts={{
                                        width: "100%",
                                        height: "300px",
                                        playerVars: {
                                        autoplay: 0,
                                        controls: 1,
                                        mute: 1,
                                        loop: 1,
                                        playlist: "1vIU3R-BIDQ",
                                        },
                                    }}
                                    /> */}
                                    <video width="100%" height="300px" controls muted loop playsInline>
                                        <source src='/video/client1.mp4' type="video/mp4" />
                                    </video>
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>Jenny Li</span>
                                    <p className="subtitle">
                                        Golden Win Employment Agency LTD.
                                        <br />
                                        Hong Kong
                                    </p>
                                    
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <div>
                                    <video width="100%" height="300px" controls muted loop playsInline>
                                        <source src='/video/world star - japan.mp4' type="video/mp4" />
                                    </video>
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>Kennsuke Hashida</span>
                                    <p className="subtitle">
                                        World Star International Japan
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <div>
                                    <video width="100%" height="300px" controls muted loop playsInline>
                                        <source src='/video/boubyan - kuwait.mp4' type="video/mp4" />
                                    </video>
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>Fahad Al-Shammari Abu Nayef</span>
                                    <p className="subtitle">Boubyan Company <br />Kuwait   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section  className={`${s.testimonialSection} mt-5 mb-3`}>
                <div className={s.containerContent}>
                    <div className="row m-0 justify-content-center">
                        <div className="col-md-10">
                            <div className="header">
                                <h2 className="title">{t("what")}</h2>
                                {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate ratione</p> */}
                            </div>

                            <Swiper
                                    spaceBetween={20}
                                    slidesPerView={3}
                                    loop={true}
                                    modules={[Autoplay, Navigation, Pagination]}
                                    autoplay={{
                                      delay: 12000, // 12 seconds
                                      disableOnInteraction: false, // optional: tuloy pa rin autoplay kahit nag-click/swipe ang user
                                    }}
                                    speed={800}
                                    navigation
                                    pagination={{ clickable: true }}
                                  >

                                    {
                                        items.map((item,index) => (
                                            <SwiperSlide>
                                                <div key={index}>
                                                    <TestimonialCard
                                                        name={item.name}
                                                        role={item.position}
                                                        company={item.company}
                                                        avatar={item.avatar}
                                                        statement={item.info}
                                                    />
                                                </div>
                                                
                                            </SwiperSlide>
                                            
                                        ))
                                    }
                                
                            </Swiper>
                            
                                
                           
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}