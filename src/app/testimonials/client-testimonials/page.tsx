"use client"

import Banner from "@/components/Banner";
import YouTube from "react-youtube";
import TestimonialCard from "@/components/TestimonialsCard";
import s from "../../../styles/testimonials.module.css"

export default function ClientTestimonial() {
    return (
        <>
            <Banner
                backgroundImage="/img/banner/testimonials.jpg"
                title="Testimonials"
                subtitle="Client Testimonials"
                description="With over 15 branches nationwide, Placewell has a strong presence in the Philippines and recruits workers from all over the country. Our branch offices are located in key cities and provinces, allowing us to connect with a wide pool of talented Filipino workers and provide them with the support they need throughout the recruitment and deployment process."
            />

            <section className="mt-5">
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="header">
                            <h2 className="title">Our Client Testimonials</h2>
                            <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate ratione</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 p-2">
                                <div>
                                    <YouTube
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
                                    />
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>Juan Carlos Santos</span>
                                    <p className="subtitle">Chief Executive Officer</p>
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <div>
                                    <YouTube
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
                                    
                                    />
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>John Paul Cruz</span>
                                    <p className="subtitle">General Manager</p>
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <div>
                                    <YouTube
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
                                    
                                    />
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>Mark Anthony Reyes</span>
                                    <p className="subtitle">Operations Manager</p>
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
                                <h2 className="title">What Our Clients Says</h2>
                                <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate ratione</p>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <TestimonialCard />
                                </div>
                                <div className="col-md-4">
                                    <TestimonialCard />
                                </div>
                                <div className="col-md-4">
                                    <TestimonialCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}