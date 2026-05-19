"use client"
import Banner from "@/components/Banner"
import ImageThumbnail from "@/components/ImageThumbnail"
import { getBranchData } from "./data"

export default function BranchOffices() {
    const branchData = getBranchData();

    return (
        <>
            <Banner
                backgroundImage="/img/banner/map.jpg"
                title="Departments and Facilities"
                subtitle="Branch Offices"
                description="Learn more about our nationwide locations"
            />

            <section className="mt-5">
                <div className="header">
                    <h2 className="title">Our Branches</h2>
                    {/* <p className="subtitle">Find a Branch new you. We're here to serve you better.</p> */}
                </div>

                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            {
                                branchData.map((item, index) => (
                                    <div className="col-md-3" key={index}>
                                        <ImageThumbnail 
                                            src={item.image} 
                                            title={item.title} 
                                            address={item.address} 
                                            contact={item.contact}
                                        />
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}