import Banner from "@/components/Banner"
import { FaLocationDot } from "react-icons/fa6";
import s from "@/styles/about.module.css"
import { getAllBranches, getAllBranchesVisaya, getAllBranchesMindanao } from "@/data/branches"
import CustomHR from "@/components/CustomHR";

export default function AboutBranches() {
    return (
        <>
            <Banner
                backgroundImage="/img/banner/philippines.jpg"
                title="About Us"
                subtitle="Branch Offices"
                description="With over 15 branches nationwide, Placewell has a strong presence in the Philippines and recruits workers from all over the country. Our branch offices are located in key cities and provinces, allowing us to connect with a wide pool of talented Filipino workers and provide them with the support they need throughout the recruitment and deployment process."
            />

            <section className="mt-3 mb-4">
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10 text-center position-relative">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                    <span className="title" style={{fontSize:"24px"}}>Our Branch Offices</span>
                                    <p className="subtitle" style={{fontSize:"14px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                                </div>
                                <div className="text-start mt-4">
                                    <div>
                                        <span className="title" style={{fontSize:"20px"}}>Luzon</span>
                                    </div>
                                    {
                                        getAllBranches().map((item,index)=>{
                                            return (
                                                <div key={index}>
                                                    <span className="badge bg-success">{item.number}</span><span className="subtitle" style={{fontSize:"12px"}}> <span style={{fontWeight:"bold"}}>{item.city} -</span> {item.address}</span>
                                                </div>
                                            )
                                        })
                                    }

                                    <div className="mt-4">
                                        <span className="title" style={{fontSize:"20px"}}>Visayas</span>
                                    </div>
                                    {
                                        getAllBranchesVisaya().map((item,index)=>{
                                            return (
                                                <div key={index}>
                                                    <span className="badge bg-success">{item.number}</span><span className="subtitle" style={{fontSize:"12px"}}> <span style={{fontWeight:"bold"}}>{item.city} -</span> {item.address}</span>
                                                </div>
                                            )
                                        })
                                    }

                                    <div className="mt-4">
                                        <span className="title" style={{fontSize:"20px"}}>Mindanao</span>
                                    </div>
                                    {
                                        getAllBranchesMindanao().map((item,index)=>{
                                            return (
                                                <div key={index}>
                                                    <span className="badge bg-success">{item.number}</span><span className="subtitle" style={{fontSize:"12px"}}> <span style={{fontWeight:"bold"}}>{item.city} -</span> {item.address}</span>
                                                </div>
                                            )
                                        })
                                    }
                                    
                                </div>
                            </div>
                            <div className="col-md-8 d-flex justify-content-center align-items-center">
                                <img src="/img/mapv1.png" className="img-fluid" alt="" />
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="row m-0 justify-content-center">
                        <div className="col-md-11">
                        <CustomHR height="10px" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}