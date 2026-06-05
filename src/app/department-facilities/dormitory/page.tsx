"use client"
import Banner from "@/components/Banner"
import s from "../../../styles/dormitory.module.css"
import { useTranslations } from "next-intl";

export default function Dormitory() {
    const t = useTranslations('dormitory');
    return (
        <>
            <Banner
                backgroundImage="/img/default.png"
                title={t("title")}
                subtitle={t("subtitle")}
                description={t("desc")}
            />

            <section>
                <div className="row m-0 justify-content-center mb-3">
                    <div className="col-md-10">
                        <div className="header">
                            <h2 className="title">{t("our")}</h2>
                            {/* <p className="subtitle">Find a Branch new you. We're here to serve you better.</p> */}
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className={s.card}>
                                    <img src="/img/branches/1.jpg" className={`${s.imgStyle} img-fluid`} alt="" />

                                    <div className={s.overlay}>
                                        <span className={s.overlayTitle}>Comfortable Rooms</span>
                                        <p className={s.overlayText}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={s.card}>
                                    <img src="/img/branches/2.jpg" className={`${s.imgStyle} img-fluid`} alt="" />

                                    <div className={s.overlay}>
                                        <span className={s.overlayTitle}>Comfortable Rooms</span>
                                        <p className={s.overlayText}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={s.card}>
                                    <img src="/img/branches/3.jpg" className={`${s.imgStyle} img-fluid`} alt="" />

                                    <div className={s.overlay}>
                                        <span className={s.overlayTitle}>Comfortable Rooms</span>
                                        <p className={s.overlayText}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}