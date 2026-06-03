import Image from "next/image";
import s from "../components/styles/whyPlacewell.module.css"
import { FaCircleCheck } from "react-icons/fa6";
import { getRollingData, getWhyHireFilipino  } from "@/data/homepage";
import { useTranslations } from "next-intl";


export default function WhyHire() {
    const whyHire = getWhyHireFilipino()
    const t = useTranslations();
    return (
        <section className={`${s.section}`}>
            <div className={s.wrapper}>

                {/* LEFT SIDE */}
                <div className={s.left}>
                <div className={s.imageWrap}>
                    <Image
                    src="/img/banner/construction.jpg"
                    alt="Planning"
                    fill
                    className={s.image}
                    />
                    <div className={s.fade}></div>
                </div>

                {/* STATS */}
                    {/* <div className={s.stats}>
                        <div className="row">
                            <div className="col text-white">
                                <h4>Your trusted partner</h4>
                                <small>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </small>
                            </div>
                        </div>
                        
                    </div> */}
                </div>

                {/* RIGHT SIDE */}
                <div className={s.right}>
                <span className={s.titleHead}>{t("home.whyFilipino.title")}</span>
                <p className={s.desc} style={{color:"white"}}>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                </p>

                <div className={s.list}>
                    {whyHire.map((item, i) => (
                    <div key={i} className={s.item}>
                        <div >
                            <FaCircleCheck className={s.icon}/>
                        </div>
                        <div>
                            <h4>{t(`home.whyFilipino.itemList.${i}.title`)}</h4>
                            <p>
                                {t(`home.whyFilipino.itemList.${i}.desc`)}
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