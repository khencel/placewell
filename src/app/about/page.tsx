"use client";

import Banner from "@/components/Banner";
import s from "./about.module.css";
import Myra from "./myra";
import CustomHR from "@/components/CustomHR";
import FacebookMarketing from "./facebook";
import WhatsApp from "./whatsApp";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();
    return (
      <>
        <Banner
            backgroundImage="/img/banner/services.jpg"
            title={t("ourServices.title")}
            subtitle={t("ourServices.subtitle")}
            description={t("ourServices.desc")}
        />

        <section className="mb-5">
          <div className="row m-0 justify-content-center">
            <div className={`${s.contSection} col-md-10 border`}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-7 p-4">
                  <div className="header" style={{textAlign:"left"}}>
                    <h2 className="title" style={{fontSize:"24px"}}>{t("ourServices.recruitment")} </h2>
                    <p className="subtitle">{t("ourServices.recruitmentDesc")}</p>
                  </div>
                </div>
                <div className="col-md-5 p-3 p-md-0">
                    <div className={s.imageStyle} style={{ background: "url('/img/services/DSC04584.jpg') center/cover no-repeat" }}>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="row m-0 justify-content-center">
            <div className={`${s.contSection} col-md-10 border`}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-5 p-3 order-2 order-md-1 p-md-0">
                    <div className={s.imageStyleLeft} style={{ background: "url('/img/services/screening.jpg') center/cover no-repeat" }}>

                    </div>
                </div>
                <div className="col-md-7 p-4 order-1 order-md-2">
                  <div className="header" style={{textAlign:"left"}}>
                    <h2 className="title" style={{fontSize:"24px"}}>{t("ourServices.screening")}</h2>
                    <p className="subtitle">{t("ourServices.screeningDesc")}</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <section className="mb-5">
          <div className="row m-0 justify-content-center">
            <div className={`${s.contSection} col-md-10 border`}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-7 p-4">
                  <div className="header" style={{textAlign:"left"}}>
                    <h2 className="title" style={{fontSize:"24px"}}>{t("ourServices.interview")}</h2>
                    <p className="subtitle">
                      {t("ourServices.interviewDesc")}
                    </p>
                  </div>
                </div>
                <div className="col-md-5 p-3 p-md-0">
                    <div className={s.imageStyle} style={{ background: "url('/img/services/DSC02801.jpg') center/cover no-repeat" }}>

                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="row m-0 justify-content-center">
            <div className={`${s.contSection} col-md-10 border`}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-5 p-3 order-2 order-md-1 p-md-0">
                    <div className={s.imageStyleLeft} style={{ background: "url('/img/services/DSC03631.jpg') center/cover no-repeat" }}>

                    </div>
                </div>
                <div className="col-md-7 p-4 order-1 order-md-2">
                  <div className="header" style={{textAlign:"left"}}>
                    <h2 className="title" style={{fontSize:"24px"}}><Link href="/trade-test" style={{color:"#448153"}}>{t("ourServices.tradeTest")}</Link></h2>
                    <p className="subtitle">
                      {t("ourServices.tradeTestDesc")}
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="row m-0 justify-content-center">
            <div className={`${s.contSection} col-md-10 border`}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-7 p-4">
                  <div className="header" style={{textAlign:"left"}}>
                    <h2 className="title" style={{fontSize:"24px"}}>{t("ourServices.skillAndLang")}</h2>
                    <p className="subtitle">
                      {t("ourServices.skillAndLangDesc")}
                    </p>
                  </div>
                </div>
                <div className="col-md-5 p-3 p-md-0">
                    <div className={s.imageStyle} style={{ background: "url('/img/services/DSC04492.jpg') center/cover no-repeat" }}>

                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="row m-0 justify-content-center">
            <div className={`${s.contSection} col-md-10`}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-5 p-3 order-2 order-md-1 p-md-0">
                    <div className={s.imageStyleLeft} style={{ background: "url('/img/services/DSC03237.jpg') center/cover no-repeat" }}>

                    </div>
                </div>
                <div className="col-md-7 p-4 order-1 order-md-2">
                  <div className="header" style={{textAlign:"left"}}>
                    <h2 className="title" style={{fontSize:"24px"}}>{t("ourServices.immigration")}</h2>
                    <p className="subtitle">
                      {t("ourServices.immigrationDesc")}
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="row m-0 justify-content-center">
            <div className={`${s.contSection} col-md-10 border`}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-7 p-4">
                  <div className="header" style={{textAlign:"left"}}>
                    <h2 className="title" style={{fontSize:"24px"}}>Pre-Departure Orientation </h2>
                    <p className="subtitle">
                      An accredited provider since 1988, Placewell conducts the government-required Pre-Departure Orientation Seminar (PDOS) in its own facility. This one-day seminar prepares selected candidates by providing essential information about their destination country and useful advice about working abroad.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 p-3 p-md-0">
                    <div className={s.imageStyle} style={{ background: "url('/img/services/DSC03481.jpg') center/cover no-repeat" }}>

                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="row m-0 justify-content-center">
            <div className={`${s.contSection} col-md-10 border`}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-5 p-3 order-2 order-md-1 p-md-0">
                    <div className={s.imageStyleLeft} style={{ background: "url('/img/services/achievement.JPG') center/cover no-repeat" }}>

                    </div>
                </div>
                <div className="col-md-7 p-4 order-1 order-md-2">
                  <div className="header" style={{textAlign:"left"}}>
                    <h2 className="title" style={{fontSize:"24px"}}>{t("ourServices.deployment")}</h2>
                    <p className="subtitle">
                      {t("ourServices.deploymentDesc")}
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <div className="row m-0 justify-content-center">
            <div className={`${s.contSection} col-md-10 border`}>
              <div className="row justify-content-center align-items-center">
                <div className="col-md-7 p-4">
                  <div className="header" style={{textAlign:"left"}}>
                    <h2 className="title" style={{fontSize:"24px"}}>{t("ourServices.postDeployment")}</h2>
                    <p className="subtitle">
                      {t("ourServices.postDeploymentDesc")}
                    </p>
                  </div>
                </div>
                <div className="col-md-5 p-3 p-md-0">
                    <div className={s.imageStyle} style={{ background: "url('/img/services/DSC03793.jpg') center/cover no-repeat" }}>

                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="row m-0 justify-content-center">
          <div className="col-md-11">
            <CustomHR height="10px" />
          </div>
        </div>


        {/* <Myra />
        <WhatsApp />
        <FacebookMarketing /> */}
      </>
    );
}