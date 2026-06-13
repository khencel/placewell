"use client"

import Banner from "@/components/Banner"
import s from "../../styles/engage.module.css"
import { FaSquareWhatsapp, FaPhone, FaEnvelope, FaLocationDot,FaDownload, FaLock, FaFileShield  } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { IoBookSharp } from "react-icons/io5";
import Process from "./process";   
import { useTranslations } from "next-intl";

export default function EngageWithUs() {
    const t = useTranslations("engage");
    return (
        <>
            <Banner
                backgroundImage="/img/2148269340.jpg"
                title={t("title")}
                subtitle={t("subtitle")}
                description={t("desc")}
            />
            <Process />
            <section>
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="header">
                            <h2 className="title">{t("engage")}</h2>
                            <p className="subtitle">{t("engageDesc")}</p>
                        </div>
                    </div>
                </div>
                
            </section>

            

            <section>
                <div className="row m-0 justify-content-center mt-5 mb-5">
                    <div className="col-md-5">
                        <div className={`${s.leftCont} d-flex gap-2 `}>
                            <div style={{width:"40%"}}>
                                <img src="/img/engage/firstAvatar.png" className={s.imageStyle} alt="" />
                            </div>
                            <div className="" style={{width:"60%"}}>
                                <span className="title" style={{fontSize:"20px", fontWeight:"bold"}}>Kim Carl Diestro</span>
                                <p className="subtitle"><i>{t('business')}</i></p>
                                <div className="mb-2">
                                    <span><FaSquareWhatsapp className={s.iconStyle} style={{color:"#25D366"}} /></span> <span className="title" style={{fontSize:"15px", fontWeight:"bold"}}>{t('whatsapp')}:</span><span>+63 9XX XXXX XXXX</span>
                                </div>
                                <div className="mb-2">
                                    <span><FaPhone className={s.iconStyle} style={{color:"#448153"}} /></span> <span className="title" style={{fontSize:"15px", fontWeight:"bold"}}>{t('cellphone')}:</span><span> +63 9XX XXXX XXXX</span>
                                </div>
                                <div className="mb-2">
                                    <span><FaEnvelope className={s.iconStyle} style={{color:"#448153"}} /></span> <span className="title" style={{fontSize:"15px", fontWeight:"bold"}}>{t('email')}:</span><span> sample@gmail.com</span>
                                </div>
                                <div className="mb-2">
                                    <span><FaLocationDot className={s.iconStyle} style={{color:"#448153"}} /></span> <span className="title" style={{fontSize:"15px", fontWeight:"bold"}}>{t('address')}:</span><span> JMC Building, 123 JMC Street, Makati City, Metro Manila, Philippines</span>
                                </div>
                                
                            </div>
                        </div>

                        {/* <div className={`${s.leftCont} d-flex gap-2 mt-4 `}>
                            <div style={{width:"40%"}}>
                                <img src="/img/engage/secondAvatar.png" className={s.imageStyle} alt="" />
                            </div>
                            <div className="" style={{width:"60%"}}>
                                <span className="title" style={{fontSize:"20px", fontWeight:"bold"}}>Keisuke Nishiwaki </span>
                                <p className="subtitle"><i>{t('japan')}</i></p>
                                <div className="mb-2">
                                    <span><FaSquareWhatsapp className={s.iconStyle} style={{color:"#25D366"}} /></span> <span className="title" style={{fontSize:"15px", fontWeight:"bold"}}>{t('whatsapp')}:</span><span>+63 9XX XXXX XXXX</span>
                                </div>
                                <div className="mb-2">
                                    <span><FaPhone className={s.iconStyle} style={{color:"#448153"}} /></span> <span className="title" style={{fontSize:"15px", fontWeight:"bold"}}>{t('cellphone')}:</span><span> +63 9XX XXXX XXXX</span>
                                </div>
                                <div className="mb-2">
                                    <span><FaEnvelope className={s.iconStyle} style={{color:"#448153"}} /></span> <span className="title" style={{fontSize:"15px", fontWeight:"bold"}}>{t('email')}:</span><span> sample@gmail.com</span>
                                </div>
                                <div className="mb-2">
                                    <span><FaLocationDot className={s.iconStyle} style={{color:"#448153"}} /></span> <span className="title" style={{fontSize:"15px", fontWeight:"bold"}}>{t('address')}:</span><span> JMC Japan Office, 123 Nihonbashi: Chuo-ku, Tokyo 103-0027, Japan</span>
                                </div>
                                
                            </div>
                        </div> */}
                    </div>
                    <div className="col-md-5">
                        <div className={s.rightCont}>
                            <div className={`${s.items} d-flex gap-2 border p-2 rounded-4`}>
                                <div style={{width:"10%"}}><SiGoogledocs className={s.docsIcon} style={{color:"#1C6AB9"}} /></div>
                                <div style={{width:"60%"}} className="d-flex align-items-center pt-2">
                                    <span className="title" style={{fontSize:"18px",fontWeight:"bold"}}>{t('profilePlacewell')}</span>
                                </div>
                                <div style={{width:"23%"}} className="d-flex justify-content-end align-items-center">
                                    <button className="btnprimary" style={{fontSize:"12px",padding:"10px"}} >{t('download')} <FaDownload/></button>
                                </div>
                            </div>

                            <div className={`${s.items} d-flex gap-2 border p-2 rounded-4`}>
                                <div style={{width:"10%"}}><SiGoogledocs className={s.docsIcon} style={{color:"#11A17D"}} /></div>
                                <div style={{width:"60%"}} className="d-flex align-items-center pt-2">
                                    <span className="title" style={{fontSize:"18px",fontWeight:"bold"}}>{t('profileProtech')}</span>
                                </div>
                                <div style={{width:"23%"}} className="d-flex justify-content-end align-items-center">
                                    <button className="btnprimary"style={{fontSize:"12px",padding:"10px"}} >{t('download')} <FaDownload/></button>
                                </div>
                            </div>
                            <div className={`${s.items} d-flex gap-2 border p-2 rounded-4`}>
                                <div style={{width:"10%"}}><SiGoogledocs className={s.docsIcon} style={{color:"#D2A446"}} /></div>
                                <div style={{width:"60%"}} className="d-flex align-items-center pt-2">
                                    <span className="title" style={{fontSize:"18px",fontWeight:"bold"}}>{t('profileHashira')}</span>
                                </div>
                                <div style={{width:"23%"}} className="d-flex justify-content-end align-items-center">
                                    <button className="btnprimary" style={{fontSize:"12px",padding:"10px"}} >{t('download')} <FaDownload/></button>
                                </div>
                            </div>
                            <div className={`${s.items} d-flex gap-2 border p-2 rounded-4`}>
                                <div style={{width:"10%"}}><IoBookSharp className={s.docsIcon} style={{color:"#553184"}} /></div>
                                <div style={{width:"60%"}} className="d-flex align-items-center pt-2">
                                    <span className="title" style={{fontSize:"18px",fontWeight:"bold"}}>{t('guide')}</span>
                                </div>
                                <div style={{width:"23%"}} className="d-flex justify-content-end align-items-center">
                                    <button className="btnprimary" style={{fontSize:"12px",padding:"10px"}} >{t('download')} <FaDownload/></button>
                                </div>
                            </div>
                            <div className={`${s.items} d-flex gap-2 border p-2 rounded-4`}>
                                <div style={{width:"10%"}}><FaFileShield  className={s.docsIcon} style={{color:"#D3282C"}} /></div>
                                <div style={{width:"60%"}} className=" pt-2">
                                    <span className="title" style={{fontSize:"18px",fontWeight:"bold"}}>{t('accreditation')}</span>
                                    <br />
                                    <FaLock /><small className="text-danger" style={{fontWeight:"bold"}}>{t('important')}</small>
                                </div>
                                <div style={{width:"23%"}} className="d-flex justify-content-end align-items-center">
                                    <button className="btnprimary" style={{fontSize:"12px",padding:"10px"}} >{t('download')} <FaDownload/></button>
                                </div>
                            </div>
                            {/* <div className="d-flex">
                                <div style={{width:"50%"}}>
                                    <img src="/img/envelopLock.png" className="img-fluid" alt="" />
                                </div>
                                <div style={{width:"50%"}}>
                                    <img src="/img/confidential.png" style={{width:"78%"}} alt="" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}