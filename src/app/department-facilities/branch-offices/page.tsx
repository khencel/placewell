"use client"
import Banner from "@/components/Banner"
import ImageThumbnail from "@/components/ImageThumbnail"
import { getBranchData } from "./data"

export default function BranchOffices() {
    const branchData = getBranchData();

    return (
        <>
            <Banner
                backgroundImage="/img/banner/124382.jpg"
                title="Departments and Facilities"
                subtitle="Branch Offices"
                description="With over 15 branches nationwide, Placewell has a strong presence in the Philippines and recruits workers from all over the country. Our branch offices are located in key cities and provinces, allowing us to connect with a wide pool of talented Filipino workers and provide them with the support they need throughout the recruitment and deployment process."
            />

            <section className="mt-5">
                <div className="header">
                    <h2 className="title">Our Branches</h2>
                    <p className="subtitle">Find a Branch new you. We're here to serve you better.</p>
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