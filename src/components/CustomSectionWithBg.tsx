import s from "../components/styles/whyPlacewell.module.css"
import { FaCircleCheck } from "react-icons/fa6";
import { getWhyHireFilipino } from "@/data/homepage";
import Image from "next/image";

interface CustomSectionWithBackgroundProps {
    headerTitle?: string;
    subtitle?: string;
    data?: {
        title: string;
        description: string;
    }[]
}

export default function CustomSectionWithBackground({ headerTitle, subtitle, data }: CustomSectionWithBackgroundProps) {
    const whyHire = getWhyHireFilipino()
        return (
            <section className={`${s.section} ${s.banner}`}>
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
                            <div className="row">
                                <div className="col text-white">
                                    <h4>Your trusted partner</h4>
                                    <small>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* RIGHT SIDE */}
                    <div className={s.right}>
                    <span className={s.titleHead} style={{color:"white"}}>{headerTitle}</span>
                    <p className={s.desc} style={{color:"white"}}>
                        {subtitle}
                    </p>
    
                    <div className={s.list}>
                        {data?.map((item, i) => (
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