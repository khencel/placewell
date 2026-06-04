"use client"

import style from '../../styles/myra.module.css'
import { useTranslations } from "next-intl";

export default function Myra(){
    const t = useTranslations();
    return (
        <>
            <section className='mt-3 mb-3'>
                <div className="row m-0 justify-content-center">
                    <div className={`${style.contSection} col-md-10 border`}>
                        <div className="row">
                            <div className="col-md-6 d-flex">
                                <div style={{width:"15%"}}>
                                    <img src="/img/icon/line.png" style={{width:"100%"}} alt="" />
                                </div>
                                <div style={{width:"85%"}} className='p-3'>
                                    <h2 className={style.title}>Myra</h2>
                                    <small style={{color:"#0d6308"}}>({t("ourServices.manPower")})</small>
                                    <p className={style.description}>
                                        {t("ourServices.myraDesc")}
                                    </p>
                                </div>
                                
                            </div>
                            <div className="col-md-6">
                                <div className={style.leftContent}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}