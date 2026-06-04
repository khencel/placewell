"use client"
import s from '@/styles/whatsApp.module.css'
import { useTranslations } from "next-intl";
export default function WhatsApp(){
    const t = useTranslations();
    return (
        <>
            <section>
                <div className="row m-0 justify-content-center">
                    <div className={`${s.contSection} col-md-10 border`}>
                        <div className={`row`}>
                            <div className="col-md-4 p-3">
                                <h2 className={s.title} style={{fontSize:"20px"}}>{t("ourServices.whatsAup")}</h2>
                                <div className={s.divider} />
                                <div>
                                    <span className={s.description} style={{fontSize:"12px"}}>
                                        {t("ourServices.whatsAupDesc")}
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4 p-3 justify-content-center align-items-center">
                                <div className='d-flex'>
                                    <div style={{width:"25%"}}>
                                        <img src="/img/icon/whatsapp.png" style={{width:"70%"}} alt="" />
                                    </div>
                                    <div>
                                        <span className={s.title} style={{fontSize:"14px"}}>{t("ourServices.whatsAppGroup")}</span>
                                        <br />
                                        <span className={s.description}>
                                            {t("ourServices.whatsAppGroupDesc")}
                                        </span>
                                        
                                    </div>
                                </div>
                                <div className='d-flex mt-3'>
                                    <div style={{width:"25%"}}>
                                        <img src="/img/icon/line.png" style={{width:"70%"}} alt="" />
                                    </div>
                                    <div>
                                        <span className={s.title} style={{fontSize:"14px"}}>{t("ourServices.lineGroup")}</span>
                                        <br />
                                        <span className={s.description}>
                                            {t("ourServices.lineGroupDesc")}
                                        </span>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-md-4">
                                <div className={s.socBackground}>
                                    <img src="/img/phone.png" style={{height:"100%"}} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}