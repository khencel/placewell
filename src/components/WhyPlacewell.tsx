import Image from "next/image";
import s from "../components/styles/whyPlacewell.module.css"
import { FaCircleCheck } from "react-icons/fa6";
import { getRollingData } from "@/data/homepage";
import { MdGroups } from "react-icons/md";
import { FaGlobe, FaCalendar  } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function WhyPlacewell() {
    const rollingData = getRollingData();
    const t = useTranslations();
    
    return (
        <section className={s.section}>
        <div className={s.wrapper}>

            {/* LEFT SIDE */}
            <div className={s.left}>
            <div className={s.imageWrap}>
                <Image
                src="/img/planning.jpg"
                alt="Planning"
                fill
                className={s.image}
                />
                <div className={s.fade}></div>
            </div>

            {/* STATS */}
                <div className={s.stats}>
                    <div className={s.stat}>
                        
                        <MdGroups className={s.iconStat} />
                        
                        <h3>200,000</h3>
                        <p>{t("home.deployed")}</p>
                    </div>
                    <div className={s.stat}>
                        
                        <FaGlobe className={s.iconStat} />
                        
                        <h3>15+</h3>
                        <p>{t("home.branchOffices")}</p>
                    </div>
                    <div className={s.stat}>
                        <FaCalendar className={s.iconStat} /> 
                        <h3>50 {t("home.year")}</h3>
                        <p>{t("home.exp")}</p>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className={s.right}>
            <span className={s.titleHead}>{t("home.whyPlacewell")}</span>
            <p className={s.desc}>
                {t("home.whyPlacewellSub")}
            </p>

            <div className={s.list}>
                {rollingData.map((item, i) => (
                <div key={i} className={s.item}>
                    <div >
                        <FaCircleCheck className={s.icon}/>
                    </div>
                    <div>
                        <h4>{item.title}</h4>
                        <p>
                            {item.description}
                        </p>
                    </div>
                </div>
                ))}
            </div>
            </div>

        </div>
        </section>
    );
}