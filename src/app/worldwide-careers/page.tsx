"use client"
import Banner from "@/components/Banner"
import  s from "../../styles/worldwide.module.css"
import { 
            iconWelder, 
            iconShipYard, 
            iconTrucking,
            iconCarpenters,
            iconSteelFixer,
            iconMasons,
            iconPainters,
            iconScaffolders,
            iconEngineer,
            iconMechanical,
            iconFactoryWorker,
            iconHeaveEquipment,
            iconCleaners,
            iconDomestic,
            iconFoodService,
            iconFlightGroundHandling,
            iconHotel,
            iconFarmers,
            iconTeacher,
            iconDriver,
            iconChef,
            iconNurse,
            iconCaregiver,
            iconDoctor,
            iconDentist,
            iconMidwives,
            iconMedical  
} from "./iconList"
import { useTranslations } from "next-intl";

export default function WorldWideCareers() {
    const t = useTranslations("worldWide");
    return (
        <>
            <Banner
                backgroundImage="/img/banner/globe.jpg"
                title={t("title")}
                subtitle={t("subtitle")}
                description={t("desc")}
            />

            <section>
                <div className="row m-0 justify-content-center" style={{background:"#C6D7C4"}}>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-2 p-3">
                                <span className="title" style={{fontSize:"20px"}}>{t("construction")}</span>
                                <p  className="subtitle">
                                    {t("constructionDesc")}
                                </p>

                            </div>
                            <div className="col-md-5 p-3">
                                <div className="d-flex justify-content-center gap-2">
                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        <div>{iconWelder()}</div>
                                        <span className={s.label}>{t("welder")}</span>

                                        
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>{t("welder")}</span>
                                            <p className="subtitle">
                                                {t.rich("welderDesc", {
                                                    br: () => <br />
                                                })}
                                            </p>
                                        </span>
                                    </div>

                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        {iconShipYard()}
                                        <span className={s.label}>{t("shipyard")}</span>

                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>{t("shipyard")}</span>
                                            <p className="subtitle">
                                                {t.rich("shipyardDesc", {
                                                    br: () => <br />
                                                })}
                                            </p>
                                        </span>
                                    </div>

                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        {iconTrucking()}
                                        <span className={s.label}>{t("trucking")}</span>
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>{t("trucking")}</span>
                                            <p className="subtitle">
                                                {t.rich("truckingDesc", {
                                                    br: () => <br />
                                                })}
                                            </p>
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center gap-2 mt-2">
                                    <div className={s.secondaryIcon}>
                                        {iconCarpenters()}
                                        <span className={s.label}>{t("carpenters")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconScaffolders()}
                                        <span className={s.label}>{t("scaffolders")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconSteelFixer()}
                                        <span className={s.label}>{t("steel")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconMasons()}
                                        <span className={s.label}>{t("masons")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconPainters()}
                                        <span className={s.label}>{t("painters")}</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center gap-2 mt-2">
                                    <div className={s.secondaryIcon}>
                                        {iconEngineer()}
                                        <span className={s.label}>{t("engineer")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconMechanical()}
                                        <span className={s.label}>{t("mechanic")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconFactoryWorker()}
                                        <span className={s.label}>{t("factory")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconHeaveEquipment()}
                                        <span className={s.label}>{t("heavy")}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 p-3">
                                <div className="">
                                    <img src="/img/career/construction.png" className={`${s.rightImage} img-fluid`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="row m-0 justify-content-center mt-2 mb-2" style={{background:"#F2F3EF"}}>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-2 p-3">
                                <span className="title" style={{fontSize:"20px"}}>{t("hospitality")}</span>
                                <p  className="subtitle">
                                    {t("hospitalityDesc")}
                                </p>

                            </div>
                            <div className="col-md-5 p-3">
                                <div className="d-flex justify-content-center gap-2">
                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        <div>{iconCleaners()}</div>
                                        <span className={s.label}>{t("cleaners")}</span>

                                        
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>{t("cleaners")}</span>
                                            <p className="subtitle">
                                                Our highest-volume job order is 
                                                <br />
                                                the deployment of on-call 
                                                <br />
                                                cleaners to Saudi Arabia.
                                            </p>
                                        </span>
                                    </div>

                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        {iconDomestic()}
                                        <span className={s.label}>{t("domestic")}</span>

                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>{t("domestic")}</span>
                                            <p className="subtitle">
                                               Placewell is recognized as a leading 
                                               <br />
                                               Philippine manpower agency for deploying 
                                               <br />
                                               domestic helpers to Hong Kong. We also 
                                               <br />
                                               deploy domestic helpers in the Middle 
                                               <br />
                                               East, Singapore, Malaysia, Mongolia, and Italy.
                                            </p>
                                        </span>
                                    </div>

                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        {iconFoodService()}
                                        <span className={s.label}>{t("food")}</span>
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>{t("food")}</span>
                                            <p className="subtitle">
                                                We take pride in training and deploying the highest <br /> 
                                                quality of Filipino food service workers across the <br />
                                                globe and setting standards for service and hospitality. 
                                                
                                            </p>
                                        </span>
                                    </div>
                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        {iconFlightGroundHandling()}
                                        <span className={s.label}>{t("flight")}</span>
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>Flight Attendants and <br />Ground Handling Staff</span>
                                            <p className="subtitle">
                                                 We are a provider of flight attendants 
                                                 <br />
                                                 and ground handling staff for Kuwait Airways.
                                            </p>
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center gap-2 mt-2">
                                    <div className={s.secondaryIcon}>
                                        {iconHotel()}
                                        <span className={s.label}>{t("hotel")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconFarmers()}
                                        <span className={s.label}>{t("farmers")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconTeacher()}
                                        <span className={s.label}>{t("teachers")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconDriver()}
                                        <span className={s.label}>{t("family")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconChef()}
                                        <span className={s.label}>{t("chefs")}</span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-md-5 p-3">
                                <div className="">
                                    <img src="/img/career/12695.jpg" className={`${s.rightImage} img-fluid`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="row m-0 justify-content-center" style={{background:"#C6D7C4"}}>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-2 p-3">
                                <span className="title" style={{fontSize:"20px"}}>{t("medical")}</span>
                                <p  className="subtitle">
                                    {t("medicalDesc")}
                                </p>

                            </div>
                            <div className="col-md-5 p-3">
                                <div className="d-flex justify-content-center gap-2">
                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        <div>{iconNurse()}</div>
                                        <span className={s.label}>{t("nurses")}</span>

                                        
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>{t("nurses")}</span>
                                            <p className="subtitle">
                                                We have deployed numerous nurses to 
                                                <br />
                                                hospitals in Saudi Arabia, including 
                                                <br />
                                                the Ministry of National Guard Health 
                                                <br />
                                                Affairs and Saudi German Hospital. 
                                                <br />
                                                We have also placed hundreds of nurses 
                                                <br />
                                                in hospitals across the United States.
                                            </p>
                                        </span>
                                    </div>
                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        <div>{iconCaregiver()}</div>
                                        <span className={s.label}>{t("caregivers")}</span>

                                        
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>{t("caregivers")}</span>
                                            <p className="subtitle">
                                                We were among the first manpower agencies 
                                                <br />
                                                to deploy caregivers to Japan under the 
                                                <br />
                                                Technical Intern Training Program. 
                                                <br />
                                                We also deploy caregivers to Taiwan and 
                                                <br />
                                                Saudi Arabia.
                                            </p>
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center gap-2 mt-2">
                                    <div className={s.secondaryIcon}>
                                        {iconDoctor()}
                                        <span className={s.label}>{t("doctors")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconDentist()}
                                        <span className={s.label}>{t("dentists")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconMidwives()}
                                        <span className={s.label}>{t("midwives")}</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconMedical()}
                                        <span className={s.label}>{t("medicalTech")}</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-5 p-3">
                                <div className="">
                                    <img src="/img/caregiver.jpg" className={`${s.rightImage} img-fluid`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}