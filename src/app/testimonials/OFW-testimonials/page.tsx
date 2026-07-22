"use client"

import Banner from "@/components/Banner";
import YouTube from "react-youtube";
import TestimonialCard from "@/components/TestimonialsCard";
import s from "../../../styles/testimonials.module.css"
import { useTranslations } from "next-intl";
import OFWTestimonials from "./data";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation, Pagination } from "swiper/modules";


export default function ClientTestimonial() {
    const t = useTranslations("OFWTestimonial");
    const items = OFWTestimonials()
    const videoRef = useRef<HTMLVideoElement>(null);
    return (
        <>
            <Banner
                backgroundImage="/img/banner/57234.jpg"
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
                                    <video
                                        className={s.videoCont}
                                        ref={videoRef}
                                        width="100%"
                                        height={300}
                                        controls
                                        muted
                                        loop
                                        playsInline
                                        onLoadedMetadata={() => {
                                            if (videoRef.current) {
                                            videoRef.current.currentTime = 0.9; 
                                            }
                                        }}
                                        >
                                        <source src="/video/JAPAN - WORKER TESTIMONIAL.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>Romel De Leon</span>
                                    <p className="subtitle">
                                        Construction Worker
                                        <br />
                                        Japan
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <div>
                                    <video className={s.videoCont} width="100%" height="300px" controls muted loop playsInline>
                                        <source src='/video/trailer.mp4' type="video/mp4" />
                                    </video>
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>John Paul Cruz</span>
                                    <p className="subtitle">
                                        Trailer Truck Driver
                                        <br />
                                        Lithuania
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <div>
                                    <video className={s.videoCont} width="100%" height="300px" controls muted loop playsInline>
                                        <source src='/video/domestic2.mp4' type="video/mp4" />
                                    </video>
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>Maria Aileen Relion</span>
                                    <p className="subtitle">
                                        Domestic Helper
                                        <br />
                                        Saudi Arabia
                                    </p>
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
                                    slidesPerView={1}
                                    loop={true}
                                    modules={[Autoplay, Navigation, Pagination]}
                                    autoplay={{
                                        delay: 12000, // 12 seconds
                                        disableOnInteraction: false, // optional: tuloy pa rin autoplay kahit nag-click/swipe ang user
                                    }}
                                    speed={800}
                                    navigation
                                    pagination={{ clickable: true }}
                                    breakpoints={{
                                        576: {
                                        slidesPerView: 1,
                                        spaceBetween: 15,
                                        },
                                        768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        },
                                        992: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                        },
                                        1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 25,
                                        },
                                    }}
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