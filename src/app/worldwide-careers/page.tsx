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


export default function WorldWideCareers() {
    return (
        <>
            <Banner
                backgroundImage="/img/banner/27532.jpg"
                title="About Us"
                subtitle="Worldwide Careers"
                description="Over 200,000 Filipinos deployed to more than 30 different countries"
            />

            <section>
                <div className="row m-0 justify-content-center" style={{background:"#C6D7C4"}}>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-2 p-3">
                                <span className="title" style={{fontSize:"20px"}}>Build the World Around Us</span>
                                <p  className="subtitle">
                                    From construction sites to shipyards and highways, the skilled professionals build, operate, and maintain the structures and systems that keep the wolrd moving forward.
                                </p>

                            </div>
                            <div className="col-md-5 p-3">
                                <div className="d-flex justify-content-center gap-2">
                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        <div>{iconWelder()}</div>
                                        <span className={s.label}>Welder</span>

                                        
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>Welder</span>
                                            <p className="subtitle">
                                                We specialize in the recruitment
                                                <br />
                                                and training of welders across all
                                                <br />
                                                types of welding. We deploy skilled
                                                <br />
                                                welders to Saudi Arabia, Japan, Croatia,
                                                <br />
                                                Estonia,and Lithuania.
                                            </p>
                                        </span>
                                    </div>

                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        {iconShipYard()}
                                        <span className={s.label}>Shipyard</span>

                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>Shipyard Workers</span>
                                            <p className="subtitle">
                                                We have deployed over a thousand shipyard 
                                                <br />
                                                workers to Japan, particularly in Imabari, 
                                                <br />
                                                Shin Kurushima,including placements at 
                                                <br />
                                                Imabari Zosen and Shin Kurushima Dock.
                                            </p>
                                        </span>
                                    </div>

                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        {iconTrucking()}
                                        <span className={s.label}>Trucking</span>
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>Trailer Truck Drivers</span>
                                            <p className="subtitle">
                                                We implement a specialized recruitment 
                                                <br />
                                                system for truck drivers bound for Lithuania. 
                                                <br />
                                                We maintain a ready pool of pre-documented 
                                                <br />
                                                candidates and provide mock immigration 
                                                <br />
                                                interviews, resulting in high passing rates.
                                            </p>
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center gap-2 mt-2">
                                    <div className={s.secondaryIcon}>
                                        {iconCarpenters()}
                                        <span className={s.label}>Carpenters</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconScaffolders()}
                                        <span className={s.label}>Scaffolders</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconSteelFixer()}
                                        <span className={s.label}>Steel Fixers</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconMasons()}
                                        <span className={s.label}>Masons</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconPainters()}
                                        <span className={s.label}>Painters</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center gap-2 mt-2">
                                    <div className={s.secondaryIcon}>
                                        {iconEngineer()}
                                        <span className={s.label}>Engineer</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconMechanical()}
                                        <span className={s.label}>Mechanics and Technicians</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconFactoryWorker()}
                                        <span className={s.label}>Factory Workers</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconHeaveEquipment()}
                                        <span className={s.label}>Heavy Equipment Operators</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 p-3">
                                <div className="">
                                    <img src="/img/165.jpg" className={`${s.rightImage} img-fluid`} alt="" />
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
                                <span className="title" style={{fontSize:"20px"}}>Delivery Comfort and Care</span>
                                <p  className="subtitle">
                                    These professionals ensure people feel comportable, safe and cared for --whether at home, in hotels, on flights, or in the places where we gather and relax.
                                </p>

                            </div>
                            <div className="col-md-5 p-3">
                                <div className="d-flex justify-content-center gap-2">
                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        <div>{iconCleaners()}</div>
                                        <span className={s.label}>Cleaners</span>

                                        
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>Cleaners</span>
                                            <p className="subtitle">
                                                We specialize in the recruitment
                                                <br />
                                                and training of welders across all
                                                <br />
                                                types of welding. We deploy skilled
                                                <br />
                                                welders to Saudi Arabia, Japan, Croatia,
                                                <br />
                                                Estonia,and Lithuania.
                                            </p>
                                        </span>
                                    </div>

                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        {iconDomestic()}
                                        <span className={s.label}>Domestic Helpers</span>

                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>Domestic Helpers</span>
                                            <p className="subtitle">
                                                We have deployed over a thousand shipyard 
                                                <br />
                                                workers to Japan, particularly in Imabari, 
                                                <br />
                                                Shin Kurushima,including placements at 
                                                <br />
                                                Imabari Zosen and Shin Kurushima Dock.
                                            </p>
                                        </span>
                                    </div>

                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        {iconFoodService()}
                                        <span className={s.label}>Food Service Workers</span>
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>Food Service Workers</span>
                                            <p className="subtitle">
                                                We implement a specialized recruitment 
                                                <br />
                                                system for truck drivers bound for Lithuania. 
                                                <br />
                                                We maintain a ready pool of pre-documented 
                                                <br />
                                                candidates and provide mock immigration 
                                                <br />
                                                interviews, resulting in high passing rates.
                                            </p>
                                        </span>
                                    </div>
                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        {iconFlightGroundHandling()}
                                        <span className={s.label}>Flight Attendants and Ground Handling Staff</span>
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>Flight Attendants and Ground Handling Staff</span>
                                            <p className="subtitle">
                                                We implement a specialized recruitment 
                                                <br />
                                                system for truck drivers bound for Lithuania. 
                                                <br />
                                                We maintain a ready pool of pre-documented 
                                                <br />
                                                candidates and provide mock immigration 
                                                <br />
                                                interviews, resulting in high passing rates.
                                            </p>
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center gap-2 mt-2">
                                    <div className={s.secondaryIcon}>
                                        {iconHotel()}
                                        <span className={s.label}>Hotel Workers</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconFarmers()}
                                        <span className={s.label}>Farmers</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconTeacher()}
                                        <span className={s.label}>Teachers</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconDriver()}
                                        <span className={s.label}>Family Drivers</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconChef()}
                                        <span className={s.label}>Chefs</span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-md-5 p-3">
                                <div className="">
                                    <img src="/img/2148095306.jpg" className={`${s.rightImage} img-fluid`} alt="" />
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
                                <span className="title" style={{fontSize:"20px"}}>Improve Lives. Every Day</span>
                                <p  className="subtitle">
                                    These healthcare professionals provide essential medical care, support, and treatment --helping individuals live healthier, happier lives.
                                </p>

                            </div>
                            <div className="col-md-5 p-3">
                                <div className="d-flex justify-content-center gap-2">
                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        <div>{iconNurse()}</div>
                                        <span className={s.label}>Nurses</span>

                                        
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>Nurses</span>
                                            <p className="subtitle">
                                                We specialize in the recruitment
                                                <br />
                                                and training of welders across all
                                                <br />
                                                types of welding. We deploy skilled
                                                <br />
                                                welders to Saudi Arabia, Japan, Croatia,
                                                <br />
                                                Estonia,and Lithuania.
                                            </p>
                                        </span>
                                    </div>
                                    <div className={s.iconStyle}>
                                        <img src="/img/icon/star.png" className={s.starIcon} alt="" />
                                        <div>{iconCaregiver()}</div>
                                        <span className={s.label}>Caregivers</span>

                                        
                                        <span className={s.tooltip}>
                                            <span className="title" style={{fontSize:"20px"}}>Caregivers</span>
                                            <p className="subtitle">
                                                We specialize in the recruitment
                                                <br />
                                                and training of welders across all
                                                <br />
                                                types of welding. We deploy skilled
                                                <br />
                                                welders to Saudi Arabia, Japan, Croatia,
                                                <br />
                                                Estonia,and Lithuania.
                                            </p>
                                        </span>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center gap-2 mt-2">
                                    <div className={s.secondaryIcon}>
                                        {iconDoctor()}
                                        <span className={s.label}>Doctors</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconDentist()}
                                        <span className={s.label}>Dentist</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconMidwives()}
                                        <span className={s.label}>Midwives</span>
                                    </div>
                                    <div className={s.secondaryIcon}>
                                        {iconMedical()}
                                        <span className={s.label}>Medical Technologists</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-5 p-3">
                                <div className="">
                                    <img src="/img/20723.jpg" className={`${s.rightImage} img-fluid`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}