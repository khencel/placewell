import s from "../../styles/engage.module.css"
import { FaArrowRightLong } from "react-icons/fa6";
import LeftImageContent from "@/components/leftImageContentStandard";
import RightImageContent from "@/components/RightImageContentStandard";

export default function Process(){
    return (
        <>
            <section className="mt-5">
                <div className="header">
                    <h2 className="title">Our Process</h2>
                    <p className="subtitle">We handle every step with care to help Filipino workers achieve safe and successful overseas employment.</p>
                </div>
        
                <div className="row m-0 justify-content-center d-none d-md-flex ">
                    <div className="col-md-10 position-relative">
                        
                        <div className="d-flex gap-2 justify-content-center align-items-center">
                            <div className="text-center">
                                <div className={s.itemCont}>
                                    <img src="/img/process/process1.png" className={s.iconStyleProcess} alt="" />
                                </div>
                                <div  style={{height:"100px"}}>
                                    <span className="badge bg-success">1</span>
                                    <br />
                                    <strong>POLO Verification</strong>
                                </div>
                            </div>
                            <span><FaArrowRightLong style={{color:"#448153"}} /></span>
                            <div className="text-center">
                                <div className={s.itemCont}>
                                    <img src="/img/process/process2.png" className={s.iconStyleProcess}  alt="" />
                                </div>
                                <div  style={{height:"100px"}}>
                                    <span className="badge bg-success">2</span>
                                    <br />
                                    <strong>POEA Registrastion</strong>
                                </div>
                                
                            </div>
                            <span><FaArrowRightLong /></span>
                            <div className="text-center">
                                <div className={s.itemCont}>
                                    <img src="/img/process/process3.png" className={s.iconStyleProcess}  alt="" />
                                </div>
                                
                                <div  style={{height:"100px"}}>
                                    <span className="badge bg-success">3</span>
                                    <br />
                                    <strong>Interview & Hiring</strong>
                                </div>
                                
                            </div>
                            <span><FaArrowRightLong style={{color:"#448153"}} /></span>
                            <div className="text-center">
                                <div className={s.itemCont}>
                                    <img src="/img/process/process4.png" className={s.iconStyleProcess}  alt="" />
                                </div>
                                <div style={{height:"100px"}}>
                                    <span className="badge bg-success">4</span>
                                    <br />
                                    <strong>Immigration Bureau <br /> Certificate</strong>
                                </div>
                                
                                
                            </div>
                            <span><FaArrowRightLong style={{color:"#448153"}} /></span>
                            <div className="text-center">
                                <div className={s.itemCont}>
                                    <img src="/img/process/process5.png" className={s.iconStyleProcess}  alt="" />
                                </div>
                                <div  style={{height:"100px"}}>
                                    <span className="badge bg-success">5</span>
                                    <br />
                                    <strong>Deployment</strong>
                                </div>
                                
                            </div>
                            <span><FaArrowRightLong style={{color:"#448153"}} /></span>
                            <div className="text-center">
                                <div className={s.itemCont}>
                                    <img src="/img/process/process6.png" className={s.iconStyleProcess}  alt="" />
                                </div>
                                <div  style={{height:"100px"}}>
                                    <span className="badge bg-success">6</span>
                                    <br />
                                    <strong>Monitoring</strong>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <LeftImageContent
                image="/img/process/polo.png"
                title="POLO Verification and POEA Registration"
                subtitle="Foreign companies seeking to hire Filipino workers must obtain accreditation from the Philippine Government to ensure compliance with international labor standards for employment contracts and working conditions. The company needs to have their documents verified by the Philippine Overseas Labor Office and apply for accreditation with the Philippine Overseas Employment Agency.
                        Note: PISCO will gladly assist you in the application process."
            />
            <RightImageContent
                image="/img/process/meeting.jpg"
                title="Interview & Hiring"
                subtitle="PISCO initiates sourcing and recruitment activities once the client secures POEA registration. The final selection of candidates is made by the employer.PISCO ensures that its workers have the following qualifications:
                        A minimum of six months of work experience and substantial knowledge in the relevant field. Any additional qualifications preferred by the client will also be met.

                        Certification of physical fitness from Philippine Department of Health-accredited clinics.

                        Mental preparedness for overseas work.

                        Note: Upon selection, the client is responsible for preparing the necessary work visas for their selected workers."
            />

            <LeftImageContent
                image="/img/process/passport.jpg"
                title="Working Permit And Documents Preparation"
                subtitle = {
                    <>
                        <p>
                            The client is responsible for obtaining all necessary permits required by their government for hiring overseas workers. PISCO will assist in securing necessary documents from the workers, such as passports, certificates of employment, and other required documents.
                        </p>
                        <p>
                            PISCO will process relevant documents for the workers, including visas at the nearest Embassy or Consular office, Overseas Exit Clearance (OEC), PhilHealth, Pag-Ibig, Compulsory Insurance, and Overseas Workers and Welfare Administration Membership.
                        </p>
                        <p>
                            Additionally, PISCO will provide training to workers on cross-cultural orientations, work ethics, family relations, financial management, and other areas to ensure their success in the client’s company and country.
                        </p>
                    </>
                }
            />

            <RightImageContent
                image="/img/process/deployment.jpg"
                title="Deployment"
                subtitle="Once all permits are prepared, the client is responsible for arranging flights. PISCO can also make these arrangements upon the client’s request."
            />

            <LeftImageContent
                image="/img/process/monitoring.jpg"
                title="Monitoring"
                subtitle = {
                    <>
                        <p>
                            PISCO will submit the required reports regarding the company and their hires to ensure compliance with POEA regulations. PISCO will also mediate any concerns that may arise with the workers.
                        </p>
                    </>
                }
            />

            <RightImageContent
                image="/img/process/rehire.jpg"
                title="Rehiring or Return to the Philippines"
                subtitle="Based on the company’s decision, we will process the worker’s clearance with the Philippine Government."
            />
            <LeftImageContent
                image="/img/process/416.jpg"
                title="Worker Reintegration"
                subtitle = {
                    <>
                        <p>
                            As part of our corporate social responsibility, PISCO provides career counseling to returning workers to help them find their purpose, whether in entrepreneurial activities or gainful employment locally or abroad, in coordination with relevant local government agencies.
                        </p>
                    </>
                }
            />
        </>
    )
}