import Image from "next/image";
import s from "../components/styles/whyPlacewell.module.css"
import { FaCircleCheck } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaGlobe, FaCalendar  } from "react-icons/fa6";
import ImageWithThumbnail from "./ImageWithThumbnail";

interface CustomSectionLightProps {
    headerTitle?: string;
    subtitle?: string;
    description?: React.ReactNode;
    itemList?: { title: string; description: string }[];
    isList?: boolean;
}

export default function CustomSectionLight({ headerTitle, subtitle, description, itemList, isList }: CustomSectionLightProps) {
    return (
        <>
            {/* <section className={s.section}>
                <div className={s.wrapper}>

                   
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

                   
                    
                        <div className={s.stats}>
                            <div className={s.stat}>
                                
                                <MdGroups className={s.iconStat} />
                                
                                <h3>10,000</h3>
                                <p>Workers Deployed</p>
                            </div>
                            <div className={s.stat}>
                                
                                <FaGlobe className={s.iconStat} />
                                
                                <h3>20+</h3>
                                <p>Countries Served</p>
                            </div>
                            <div className={s.stat}>
                                <FaCalendar className={s.iconStat} /> 
                                <h3>15 Years</h3>
                                <p>Experience</p>
                            </div>
                        </div>
                    </div>


                    <div className={s.right}>
                    <span className={s.titleHead}>{headerTitle}</span>
                    <p className={s.desc}>
                        {subtitle}
                    </p>

                        {
                            isList ? (
                                <div className={s.list}>
                                    {itemList?.map((item, i) => (
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
                            ):(
                                <div className={s.list}>
                                    <div className="">
                                        {description}
                                    </div>
                                </div>
                            )
                        }

                    </div>

                </div>
            </section> */}

            <section className="border" style={{backgroundColor:"#F2F3EF"}}>
                <div className="row justify-content-center m-0">
                    <div className="col-md-5 p-5">
                        <ImageWithThumbnail />
                    </div>
                    <div className="col-md-5 p-5">
                        <span className={s.titleHead}>{headerTitle}</span>
                        <p className={s.desc}>
                            {subtitle}
                        </p>
                        {
                            isList ? (
                                <div className={s.list}>
                                    {itemList?.map((item, i) => (
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
                            ):(
                                <div className={s.list}>
                                    <div className="">
                                        {description}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
        
        
    );
}