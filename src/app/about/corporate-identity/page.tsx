"use client"
import Banner from "@/components/Banner";
import ImageStyle from "@/components/ImageStyle";
import CustomHR from "@/components/CustomHR";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./style.module.css"
import MissionVision from "@/components/MissionVision";
import { useTranslations } from "next-intl";
import HistoryList from "./HistoryList";
import { Autoplay,Navigation, Pagination } from "swiper/modules";


export default function About() {
    const t = useTranslations();
    const historyT = useTranslations("history");
    return (
      <>
        <Banner
          backgroundImage="/img/banner/meeting.jpg"
          title={t("corporateIdentity.title")}
          subtitle={t("corporateIdentity.subtitle")}
          description={t("nav_sub.identity")}
        />

        <section className="mt-5">
          <div className="row m-0 justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-6">
                  <span className="title" style={{fontSize:"20px",fontWeight:"600"}}>{t("corporateIdentity.placewellTitle")}</span>
                  
                  <p className="subtitle longParagraph mt-3">
                    {t("corporateIdentity.placewellInternational")}
                  </p>
                </div>
                <div className="col-md-6 text-center">
                  <img src="/logo.png" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-5 mt-5">
            <div className="header">
              <h2 className="title">{t("corporateIdentity.boardTitle")}</h2>
              {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
            </div>

            <div className="row m-0 mt-5 pt-5 justify-content-center">

              <div className="col-md-5 p-3">
                  <div className="row">
                    <div className="col-md-6"><ImageStyle image="/img/identity/Parents-resized-600x599.jpg"/></div>
                    <div className="col-md-6 d-flex align-items-center">
                      <div>
                        <h5 className="title" style={{fontSize:"24px"}} >Filemon P. Escueta Jr.  and Aida H. Escueta</h5>
                        <small>
                            <strong>{t("corporateIdentity.chief")}</strong>
                        </small>

                        <p className="mt-3 cardText">
                            {t("corporateIdentity.chiefDesc")}
                        </p>
                      </div>
                      
                    </div>
                </div>
              </div>

              <div className="col-md-5 p-3">
                <div className="row">
                  <div className="col-md-6"><ImageStyle image="/img/eloisa.png"/></div>
                  <div className="col-md-6 d-flex align-items-center">
                      <div>
                        <h5 className="title" style={{fontSize:"24px"}} >Eleonor H. Escueta (Elo) </h5>
                        <small>
                            <strong>{t("corporateIdentity.vice")}</strong>
                        </small>

                        <p className="mt-3 cardText">
                            {t("corporateIdentity.viceDesc")}
                        </p>
                      </div>
                      
                    </div>
                </div>
                  
              </div>

              
            </div>


            <div className="row m-0 justify-content-center">
              <div className="col-md-3">
                  <div className="col"><ImageStyle image="/img/identity/jolo.jpg"/></div>
                  
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <div>
                  <h5 className="title" style={{fontSize:"24px"}} >Jose Lorenzo Escueta Beech  (Joelo)</h5>
                  <small>
                      <strong>{t("corporateIdentity.consultant")}</strong>
                  </small>

                  <p className="mt-3 cardText">
                    {t("corporateIdentity.consultantDesc")}
                  </p>
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
              <h2 className="title">{t("corporateIdentity.companyHistory")}</h2>
              {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
            </div>
            <div className={`${s.historyCont} row justify-content-center position-relative m-0 mb-5`}>
              <div className="col-md-11">

                <hr className={s.customLine} />
                <Swiper
                spaceBetween={10}
                // slidesPerView={4}
                loop={false}
                modules={[Navigation, Pagination]}
                autoplay={{ delay: 2000 }}
                speed={800}
                navigation
                // pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                  slidesPerView: 1,
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
                {
                  HistoryList(historyT).map((item, index) => (
                      <SwiperSlide>
                          <div className={s.badgeCont} key={index}>
                            <span className={`badge bg-danger`}>{item.year}</span>
                          </div>
                          <div className={` ${s.historyInfo} mt-2`}>
                            <div className={s.imgCont}>
                              <img src={item.image} style={{
                                                      width:"100%",
                                                      height:"170px",
                                                      objectFit: item.imageObjectFit as any,
                                                      objectPosition: "center 36%",
                                                    }} alt="" />
                            </div>
                            <hr />
                            <div className="mt-3 ms-2 me-2">
                                <span className="title" style={{fontSize:"15px",fontWeight:"600"}}>{item.title}</span>
                                <p className="cardText" style={{fontSize:"14px"}}>
                                  {item.description}
                                </p>
                            </div>
                          </div>
                      </SwiperSlide>
                  ))
                }
                
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