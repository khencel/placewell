"use client"
import Banner from "@/components/Banner";
import ImageStyle from "@/components/ImageStyle";
import CustomHR from "@/components/CustomHR";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import s from "./style.module.css"
import MissionVision from "@/components/MissionVision";

export default function About() {
    return (
      <>
        <Banner />
        <section className="mb-5">
            <div className="header">
              <h2 className="title">Board of Directors</h2>
              <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="row m-0 justify-content-center">
              <div className="col-md-3">
                  <ImageStyle image="/img/identity/Parents-resized-600x599.jpg"/>
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <div>
                  <h5 className="title" style={{fontSize:"24px"}} >Filemon P. Escueta Jr. (cross) and Aida H. Escueta</h5>
                  <small>
                      <strong>Chief Executive Officer and President</strong>
                  </small>

                  <p className="mt-3 cardText">
                      They are the husband and wife team that founded Placewell International and are pioneers in the Philippine overseas employment industry. Aida continues to provide dedicated service to her long-standing clients in the Middle East, even into her 90s.
                  </p>
                </div>
                
              </div>
            </div>

            <div className="row m-0 mt-5 pt-5 justify-content-center">
              <div className="col-md-5 p-3">
                <div className="row">
                  <div className="col"><ImageStyle image="/img/identity/IMG-20230710-WA0020-copy.jpg"/></div>
                  <div className="col d-flex align-items-center">
                      <div>
                        <h5 className="title" style={{fontSize:"24px"}} >Eleonor H. Escueta (Elo) </h5>
                        <small>
                            <strong>Vice President for Operations</strong>
                        </small>

                        <p className="mt-3 cardText">
                            Elo took over Placewell International in 1995 and has since transformed the company into one of the country’s leading manpower agencies. She is a seasoned businesswoman with a big heart. Under her leadership, Placewell has expanded its services across Europe, Asia, Oceania, and North America. She obtained her degree in Psychology from Colegio de San Juan de Letran. 
                        </p>
                      </div>
                      
                    </div>
                </div>
                  
              </div>

              <div className="col-md-5 p-3">
                  <div className="row">
                  <div className="col"><ImageStyle image="/img/identity/jolo.jpg"/></div>
                  <div className="col d-flex align-items-center">
                    <div>
                      <h5 className="title" style={{fontSize:"24px"}} >Jose Lorenzo Escueta Beech  (Joelo)</h5>
                      <small>
                          <strong>Consultant</strong>
                      </small>

                      <p className="mt-3 cardText">
                          Joelo is a licensed attorney and a JLPT N1 passer. He obtained his degree in International Business from Pepperdine University and his Juris Doctor from Ateneo De Manila School of Law. He is also the President of Hashira Skills and Language Academy and Pro-Tech Skills Development Center Corporation. He has been with Placewell since 2018. 
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="row m-0 mt-5 justify-content-center">
              <div className="col">
                <CustomHR height="10px" />
              </div>
            </div>
            
        </section>

        

        <section className="mt-5 mb-5">
              <MissionVision />
        </section>



        <section>
          <div className={s.sectionWrapper}>
            <div className="header">
              <h2 className="title">Company History</h2>
              <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={`${s.historyCont} row justify-content-center position-relative m-0 mb-5`}>
              <div className="col-md-11">

                <hr className={s.customLine} />
                <Swiper
                spaceBetween={20}
                // slidesPerView={4}
                loop={false}
                // modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                speed={800}
                breakpoints={{
                  0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  },
                  576: {
                  slidesPerView: 1.2, // may konting peek
                  },
                  768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                  },
                  992: {
                  slidesPerView:4,
                  spaceBetween: 20,
                  },
              }}
              >
                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                     
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2022</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>
                
              </Swiper>
              </div>
            </div>
            </div>
            <div className="row m-0 justify-content-center">
              <div className="col">
                <CustomHR height="10px" />
              </div>
            </div>
        </section>
      </>
    );
}