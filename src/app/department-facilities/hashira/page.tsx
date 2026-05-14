"use client"

import Banner from "@/components/Banner"
import Card from "./card"
import { FaCheckCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { FaHandshake } from "react-icons/fa6";
import Rolling from "@/components/Rolling";
import { getAllSampleImage } from "./data";

export default function Hashira(){
    const allImage = getAllSampleImage();
    return (
        <>
            <Banner
                backgroundImage="/img/banner/japan1.jpg"
                title="Department and Facilities"
                subtitle="Hashira Skill"
                description="Our TESDA accredited Japanese Language and Construction Training Center"
                haveBtnPrimary={true}
            />

            <section className="mt-4">
                <div className="row m-0 justify-content-center">
                    <div className="col-md-7">
                        <div className="header">
                            <h2 className="title">About Hashira Skills</h2>
                            <p className="subtitle">Empowering People. Building Futures.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Card title="Skill Training" subtitle="Industry-focused training programs designed to build practical and in-demand skills." icon={FaGraduationCap} />
                            </div>
                            <div className="col-md-4">
                                <Card title="Career Development" subtitle="Helping individuals grow professionally and prepare for global career opportunities" icon={FcStatistics}/>
                            </div>
                            <div className="col-md-4">
                                <Card title="Industry Partnership" subtitle="Strong collaboration with partners to ensure quality training and employment" icon={FaHandshake} />
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <span className="title" style={{fontSize:"18px",fontWeight:"600"}}>Training Programs</span>
                        </div>
                        <div className="row mt-4">
                            <div className="col d-flex">
                                <div style={{width:"20%"}}>
                                    <span><FaCheckCircle style={{fontSize:"25px",color:"#709C6B"}} /></span>
                                </div>
                                <div style={{width:"80%"}}>
                                    <span className="subtitle" style={{fontSize:"12px", fontWeight:"600"}}>Technical Skills Training</span>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div style={{width:"20%"}}>
                                    <span><FaCheckCircle style={{fontSize:"25px",color:"#709C6B"}} /></span>
                                </div>
                                <div style={{width:"80%"}}>
                                    <span className="subtitle" style={{fontSize:"12px", fontWeight:"600"}}>Language Proficiency</span>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div style={{width:"20%"}}>
                                    <span><FaCheckCircle style={{fontSize:"25px",color:"#709C6B"}} /></span>
                                </div>
                                <div style={{width:"80%"}}>
                                    <span className="subtitle" style={{fontSize:"12px", fontWeight:"600"}}>Work Readiness</span>
                                </div>
                            </div>
                            <div className="col d-flex">
                                <div style={{width:"20%"}}>
                                    <span><FaCheckCircle style={{fontSize:"25px",color:"#709C6B"}} /></span>
                                </div>
                                <div style={{width:"80%"}}>
                                    <span className="subtitle" style={{fontSize:"12px", fontWeight:"600"}}>Special Courses</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-4">
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="text-center mt-4 mb-3">
                            <span className="title" style={{fontSize:"18px",fontWeight:"600"}}>Climpse of our training environment</span>
                        </div>
                        <Rolling data={allImage} perSlide={4} isLoop={true} isAutoplay={true} />
                    </div>
                </div>
            </section>

        </>
    )
}