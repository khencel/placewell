"use client"
import Image from "next/image"
import Banner from "@/components/Banner"
import s from "../../../styles/dormitory.module.css"
import { useTranslations } from "next-intl";
import { getDormitory } from "../dormitory/data"

export default function Dormitory() {
    const t = useTranslations('dormitory');
    const dormitory = getDormitory();
    return (
        <>
            <Banner
                backgroundImage="/img/banner/dorm.png"
                title={t("title")}
                subtitle={t("subtitle")}
                description={t("desc")}
            />

            <section className={`container ${s.section}`}>
                {dormitory.map((item, index) => (
                    <div className={`row align-items-center g-4 ${s.row}`} key={index}>
                        <div className="col-md-4">
                            <div className={`border ${s.infoCard}`}>
                                <div className={s.iconWrap}>
                                    <span className="badge bg-success p-2">{item.icon}</span>
                                    <h3 style={{ fontWeight: "700", fontSize: "20px", margin: 0 }}>{item.title}</h3>
                                </div>
                                <p className={s.cardText}>{item.desc}</p>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className={s.collage}>
                                <div className={`${s.imgBox} ${s.img1Box}`}>
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className={s.img}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={index === 0}
                                    />
                                </div>
                                <div className={`${s.imgBox} ${s.img2Box}`}>
                                    <Image
                                        src={item.img2}
                                        alt={item.title}
                                        fill
                                        className={s.img}
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </div>
                                <div className={`${s.imgBox} ${s.img3Box}`}>
                                    <Image
                                        src={item.img3}
                                        alt={item.title}
                                        fill
                                        className={s.img}
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}