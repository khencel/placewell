"use client"

import Banner from "@/components/Banner"
import s from "../../styles/engage.module.css"
import { FaSquareWhatsapp, FaPhone, FaEnvelope, FaLocationDot,FaDownload, FaLock, FaFileShield, FaFileCircleQuestion} from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { IoBookSharp } from "react-icons/io5";
import Process from "./process";   
import { useTranslations } from "next-intl";
import Dropdown from "react-bootstrap/Dropdown";

export default function EngageWithUs() {
    const t = useTranslations("engage");

    const handleDownload = (lang: "en" | "jp", docsFile: string) => {
        const files = {
            en: `/file/${docsFile}`,
            jp: `/file/${docsFile}`,
        };

        const link = document.createElement("a");
        link.href = files[lang];
        link.download = docsFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
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
                            {/* <h2 className="title">{t("engage")}</h2> */}
                            <p className="subtitle">{t("engageDesc")}</p>
                        </div>

                        <div className="header mt-5">
                            <h2 className="title">{t("engage")}</h2>
                            
                        </div>
                    </div>
                </div>
                
            </section>

            

            <section>
                <div className="row m-0 justify-content-center mt-5 mb-5">
                    <div className="col-md-5">
                        <div className={`row ${s.leftCont}`}>
                            {/* <div className="col-md-5 p-0">
                                <div style={{width:"100%"}}>
                                    <img src="/img/carl.jpg" className={s.imageStyle} alt="" />
                                </div>
                            </div> */}
                            <div className="col-md-7">
                                <div className="" style={{width:"100%"}}>
                                    <span className="title" style={{fontSize:"20px", fontWeight:"bold"}}>Kim Carl Diestro</span>
                                    <p className="subtitle"><i>{t('business')}</i></p>
                                    <div className="mb-2 d-flex gap-1">
                                        <div >
                                            <span><FaSquareWhatsapp className={s.iconStyle} style={{color:"#25D366"}} /></span>
                                        </div>
                                        <div>
                                            <span className="title" style={{fontSize:"14px", fontWeight:"bold"}}>
                                                {t('whatsapp')}:
                                            </span>
                                        </div>
                                        <div>
                                            <span style={{fontSize:"13px",fontWeight:"500"}}>
                                                +63 928 862 4421
                                                <br />
                                                +63 998 586 4480
                                            </span>
                                        </div>
                                        
                                    </div>
                                    <div className="mb-2 d-flex gap-1">
                                        <div className="pt-2">
                                            <span><FaPhone className={s.iconStyle} style={{color:"#448153"}} /></span>
                                        </div>
                                        <div>
                                            <span className="title" style={{fontSize:"14px", fontWeight:"bold"}}>{t('cellphone')}:</span>
                                        </div>
                                        <div>
                                            <span style={{fontSize:"13px",fontWeight:"500"}}>
                                                +63 928 862 4421
                                                <br />
                                                +63 998 586 4480
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-2 d-flex gap-2">
                                        <div className="pt-2">
                                            <span><FaEnvelope className={s.iconStyle} style={{color:"#448153"}} /></span>
                                        </div>
                                        <div>
                                            <span className="title" style={{fontSize:"12px", fontWeight:"bold"}}>{t('email')}:</span>
                                            <br />
                                            <span style={{fontSize:"13px",fontWeight:"500"}}> 
                                                Marketing@placewellinternational.com
                                                <br />
                                                Jobs@placewellinternational.com
                                            </span>
                                        </div>
                                        
                                        
                                    </div>
                                    <div className="mb-2 d-flex gap-2">
                                        <div className="pt-2">
                                            <span><FaLocationDot className={s.iconStyle} style={{color:"#448153"}} /></span>
                                        </div>
                                        <div>
                                            <span className="title" style={{fontSize:"12px", fontWeight:"bold"}}>{t('address')}:</span>
                                            <br />
                                            <span style={{fontSize:"13px",fontWeight:"500"}}> 
                                                6488 JMC Centre, Upper Ground Flr, Medina St, Brgy Pio Del Pillar, Makati
                                            </span>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        {/* <div className={`${s.leftCont} d-flex gap-3 `}>
                            <div style={{width:"40%"}}>
                                <img src="/img/carl.jpg" className={s.imageStyle} alt="" />
                            </div>
                            <div className="" style={{width:"60%"}}>
                                <span className="title" style={{fontSize:"20px", fontWeight:"bold"}}>Kim Carl Diestro</span>
                                <p className="subtitle"><i>{t('business')}</i></p>
                                <div className="mb-2 d-flex gap-1">
                                    <div >
                                        <span><FaSquareWhatsapp className={s.iconStyle} style={{color:"#25D366"}} /></span>
                                    </div>
                                    <div>
                                        <span className="title" style={{fontSize:"14px", fontWeight:"bold"}}>
                                            {t('whatsapp')}:
                                        </span>
                                    </div>
                                    <div>
                                        <span style={{fontSize:"13px",fontWeight:"500"}}>
                                            +63 928 862 4421
                                            <br />
                                            +63 998 586 4480
                                        </span>
                                    </div>
                                     
                                </div>
                                <div className="mb-2 d-flex gap-1">
                                    <div className="pt-2">
                                        <span><FaPhone className={s.iconStyle} style={{color:"#448153"}} /></span>
                                    </div>
                                    <div>
                                        <span className="title" style={{fontSize:"14px", fontWeight:"bold"}}>{t('cellphone')}:</span>
                                    </div>
                                    <div>
                                        <span style={{fontSize:"13px",fontWeight:"500"}}>
                                            +63 928 862 4421
                                            <br />
                                            +63 998 586 4480
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-2 d-flex gap-2">
                                    <div className="pt-2">
                                        <span><FaEnvelope className={s.iconStyle} style={{color:"#448153"}} /></span>
                                    </div>
                                    <div>
                                        <span className="title" style={{fontSize:"12px", fontWeight:"bold"}}>{t('email')}:</span>
                                        <br />
                                        <span style={{fontSize:"13px",fontWeight:"500"}}> 
                                            Marketing@placewellinternational.com
                                            <br />
                                            Jobs@placewellinternational.com
                                        </span>
                                    </div>
                                    
                                     
                                </div>
                                <div className="mb-2 d-flex gap-2">
                                    <div className="pt-2">
                                        <span><FaLocationDot className={s.iconStyle} style={{color:"#448153"}} /></span>
                                    </div>
                                    <div>
                                        <span className="title" style={{fontSize:"12px", fontWeight:"bold"}}>{t('address')}:</span>
                                        <br />
                                        <span style={{fontSize:"13px",fontWeight:"500"}}> 
                                            6488 JMC Centre, Upper Ground Flr, Medina St, Brgy Pio Del Pillar, Makati
                                        </span>
                                    </div>
                                     
                                </div>
                                
                            </div>
                        </div> */}

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
                                    <span className="title" 
                                        style={{fontSize:"14px",fontWeight:"bold"}}>{t('profilePlacewell')}</span>
                                </div>
                                <div style={{width:"23%"}} className="d-flex justify-content-end align-items-center">
                                    <Dropdown >
                                        <Dropdown.Toggle
                                            className="btnprimary no-caret"
                                            style={{ fontSize: "12px", padding: "10px", border: "none" }}
                                        >
                                            {t("download")} <FaDownload className={s.downloadIcon} />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleDownload("en", "Placewell Company Profile.pdf")}>
                                                English
                                            </Dropdown.Item>

                                            <Dropdown.Item onClick={() => handleDownload("jp", "PISCO概要書.pdf")}>
                                                Japanese
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className={`${s.items} d-flex gap-2 border p-2 rounded-4`}>
                                <div style={{width:"10%"}}><SiGoogledocs className={s.docsIcon} style={{color:"#11A17D"}} /></div>
                                <div style={{width:"60%"}} className="d-flex align-items-center pt-2">
                                    <span className="title" style={{fontSize:"14px",fontWeight:"bold"}}>{t('profileProtech')}</span>
                                </div>
                                <div style={{width:"23%"}} className="d-flex justify-content-end align-items-center">
                                    <Dropdown >
                                        <Dropdown.Toggle
                                            className="btnprimary no-caret"
                                            style={{ fontSize: "12px", padding: "10px", border: "none" }}
                                        >
                                            {t("download")} 
                                            <FaDownload className={s.downloadIcon} />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleDownload("en", "Pro-Tech Skills - Company Profile.pdf")}>
                                                English
                                            </Dropdown.Item>

                                            <Dropdown.Item onClick={() => handleDownload("jp", "プロテクパンフレット.pdf")}>
                                                Japanese
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className={`${s.items} d-flex gap-2 border p-2 rounded-4`}>
                                <div style={{width:"10%"}}><SiGoogledocs className={s.docsIcon} style={{color:"#D2A446"}} /></div>
                                <div style={{width:"60%"}} className="d-flex align-items-center pt-2">
                                    <span className="title" style={{fontSize:"14px",fontWeight:"bold"}}>{t('profileHashira')}</span>
                                </div>
                                <div style={{width:"23%"}} className="d-flex justify-content-end align-items-center">
                                    {/* <button className="btnprimary" style={{fontSize:"12px",padding:"10px"}} onClick={() => handleDownload("jp", "柱日本語学校パンフレット.pdf")} >{t('download')} <FaDownload className={s.downloadIcon} /></button> */}

                                    <Dropdown >
                                        <Dropdown.Toggle
                                            className="btnprimary no-caret"
                                            style={{ fontSize: "12px", padding: "10px", border: "none" }}
                                        >
                                            {t("download")} 
                                            <FaDownload className={s.downloadIcon} />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleDownload("en", "Hashira Skills Company Profile.pdf")}>
                                                English
                                            </Dropdown.Item>

                                            <Dropdown.Item onClick={() => handleDownload("jp", "Hashira Skills概要書.pdf")}>
                                                Japanese
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    
                                </div>
                            </div>
                            <div className={`${s.items} d-flex gap-2 border p-2 rounded-4`}>
                                <div style={{width:"10%"}}><IoBookSharp className={s.docsIcon} style={{color:"#553184"}} /></div>
                                <div style={{width:"60%"}} className="d-flex align-items-center pt-2">
                                    <span className="title" style={{fontSize:"14px",fontWeight:"bold"}}>{t('guide')}</span>
                                </div>
                                <div style={{width:"23%"}} className="d-flex justify-content-end align-items-center">
                                    <button className="btnprimary" style={{fontSize:"12px",padding:"10px"}} onClick={() => handleDownload("jp", "Guide to Accreditation Process.pdf")}>{t('download')} <FaDownload className={s.downloadIcon} /></button>
                                </div>
                            </div>
                            <div className={`${s.items} d-flex gap-2 border p-2 rounded-4`}>
                                <div style={{width:"10%"}}><FaFileShield  className={s.docsIcon} style={{color:"#D3282C"}} /></div>
                                <div style={{width:"60%"}} className=" pt-2">
                                    <span className="title" style={{fontSize:"14px",fontWeight:"bold"}}>{t('accreditation')}</span>
                                    <br />
                                    {/* <FaLock /><small className="text-danger" style={{fontWeight:"bold"}}>{t('important')}</small> */}
                                </div>
                                <div style={{width:"23%"}} className="d-flex justify-content-end align-items-center">
                                    <button className="btnprimary" style={{fontSize:"12px",padding:"10px"}} onClick={() => handleDownload("jp", "Sample of Completed Accreditation Documents.pdf")}>{t('download')} <FaDownload className={s.downloadIcon} /></button>
                                </div>
                            </div>

                            <div className={`${s.items} d-flex gap-2 border p-2 rounded-4`}>
                                <div style={{width:"10%"}}><FaFileCircleQuestion  className={s.docsIcon} style={{color:"green"}} /></div>
                                <div style={{width:"60%"}} className=" pt-2">
                                    <span className="title" style={{fontSize:"14px",fontWeight:"bold"}}>{t('faq')}</span>
                                    <br />
                                    {/* <FaLock /><small className="text-danger" style={{fontWeight:"bold"}}>{t('important')}</small> */}
                                </div>
                                <div style={{width:"23%"}} className="d-flex justify-content-end align-items-center">
                                    <button className="btnprimary" style={{fontSize:"12px",padding:"10px"}} onClick={() => handleDownload("jp", "FAQ.docx")}>{t('download')} <FaDownload className={s.downloadIcon} /></button>
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